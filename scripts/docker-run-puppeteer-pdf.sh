#!/bin/bash

source .env
work_dir=/home/pptruser
host_assets_path=$(pwd)/assets
host_puppeteer_path=$(pwd)/.puppeteer
host_artifacts_path=$(pwd)/.puppeteer/artifacts
host_compressed_artifacts_path=$host_artifacts_path/compressed
host_raw_artifacts_path=$host_artifacts_path/raw
node_certificate_authority=$work_dir/.certs/server/ca.crt
CERTS_FOLDER=$1

if [ -z $(which docker) ];
then
  echo "This script requires docker to be available in the environment"
  echo "If you are inside the devcontainer, try running the script from the host."
  exit 1
fi

clean_artifacts() {
  rm -rf $host_artifacts_path
  mkdir -p $host_artifacts_path/{compressed,raw,screenshots}
  # This is required to please pptruser: the user inside the 
  # puppeteer container.
  chmod -R 777 "$host_artifacts_path"
}

run_docker() {
  if [ -z "$CERTS_FOLDER" ]; then
    echo "Error: First param needs to be the certs folder path"
  fi
  docker run -i \
    --init \
    --cap-add=SYS_ADMIN \
    --add-host=www.utkusarioglu.com:127.0.0.1 \
    --add-host=www.utkusarioglu.com:host-gateway \
    -v "$host_puppeteer_path/src:$work_dir/src" \
    -v "$host_assets_path/resume.yml:$work_dir/assets/resume.yml" \
    -v "$host_artifacts_path:$work_dir/artifacts" \
    -v $CERTS_FOLDER:$work_dir/.certs  \
    --rm \
    --name utkusarioglu-com-puppeteer-pdf \
    ghcr.io/puppeteer/puppeteer:latest \
    bash -c "\
      cd ./node_modules/puppeteer;
      npm install;
      cd ../..;
      npm install yaml
      export NODE_EXTRA_CA_CERTS="$node_certificate_authority"; 
      node '$work_dir/src/index.js';
    "
}

# 1- 4 means a4, l means letter. Same values is are enforced by puppeteer and
#    `utils/resume.utils.ts`.
run_gs() {
  RESUME_FILE_RELPATH='assets/resume.yml'
  # PHOTO_VARIANTS='p n'
  # SPECIALTY_ID_VARIANTS='fe be al w3 fs'
  # PAPER_FORMAT_SHORT_CODE_VARIANTS='4 l'

  PHOTO_VARIANTS="$(
    yq '.variants.includePhoto[] | .shortCode' $RESUME_FILE_RELPATH | tr '\n' ' '
  )"
  SPECIALTY_ID_VARIANTS="$(
    yq '.variants.specialties[] | .id' $RESUME_FILE_RELPATH | tr '\n' ' '
  )"
  PAPER_FORMAT_SHORT_CODE_VARIANTS="$(
    yq '.variants.paperFormats[] | .shortCode' $RESUME_FILE_RELPATH | tr '\n' ' '
  )"

  echo 'Ghostscript will process pdf files agains following specs:'
  echo "  Photo variants: '$PHOTO_VARIANTS'"
  echo "  Specialty id variants: '$SPECIALTY_ID_VARIANTS'"
  echo "  Paper format short code variants: '$PAPER_FORMAT_SHORT_CODE_VARIANTS'"

  for photo_included in $PHOTO_VARIANTS; do
    if [ $photo_included = 'p' ]; then
      photo_params="-dColorImageResolution=300"
    fi
    for specialty_id in $SPECIALTY_ID_VARIANTS; do
      for paper_format_short_code in $PAPER_FORMAT_SHORT_CODE_VARIANTS; #1
      do
        resume_code="$specialty_id$photo_included$paper_format_short_code"
        echo "resume code $resume_code"
        source="resume-$resume_code-raw.pdf"
        target_folder="$host_compressed_artifacts_path"
        filename_prefix="utku-sarioglu-resume"
        output_file="$target_folder/$filename_prefix-$resume_code.pdf"
        mkdir -p "$target_folder"
        gs \
          -sDEVICE=pdfwrite \
          -dCompatibilityLevel=1.4 \
          -dPDFSETTINGS=/screen \
          -dNOPAUSE \
          -dQUIET \
          -dBATCH \
          -sOutputFile=$output_file \
          -dMaxInlineImageSize=0 \
          $photo_params \
          "$host_raw_artifacts_path/$source"
      done
    done
  done
}

clean_artifacts && run_docker && run_gs
