#!/usr/bin/env bash

source "${0%/*}/docker-run-puppeteer-src.sh"

run_gs() {
  if [ -z "$(which gs)" ]; then
    echo "Warn: GhostScript not installed on the host. Installing..."
    apt-get install ghostscript -y
    # apt-get install -y ghostscript=9.55.0~dfsg1-0ubuntu5
  fi
  if [ -z "$(which gs)" ]; then
    echo "Error: GhostScript install didn't work. Exiting."
    exit 1
  fi

  RESUME_FILE_RELPATH='assets/resume-multi.yml'

  PHOTO_VARIANTS="$(
    yq '.variants.includePhoto[] | .shortCode' $RESUME_FILE_RELPATH | tr '\n' ' '
  )"
  SPECIALTY_ID_VARIANTS="$(
    yq '.variants.specialties[] | .id' $RESUME_FILE_RELPATH | tr '\n' ' '
  )"
  PAPER_FORMAT_SHORT_CODE_VARIANTS="$(
    yq '.variants.paperFormats[] | .shortCode' $RESUME_FILE_RELPATH | tr '\n' ' '
  )"
  
  echo 'Ghostscript will process pdf files against following specs:'
  echo "  Photo variants: '$PHOTO_VARIANTS'"
  echo "  Specialty id variants: '$SPECIALTY_ID_VARIANTS'"
  echo "  Paper format short code variants: '$PAPER_FORMAT_SHORT_CODE_VARIANTS'"
  
  mkdir -p $host_raw_artifacts_path
  mkdir -p $host_compressed_artifacts_path

  echo "Raw folder content: "
  echo "Raf folder: ${host_raw_artifacts_path}"
  ls -al $host_raw_artifacts_path

  echo "Compressed folder before start:"
  ls -al $host_compressed_artifacts_path
  

  # for photo_included in $PHOTO_VARIANTS; do
  #   if [ $photo_included = 'p' ]; then
  #     photo_params="-dColorImageResolution=300"
  #   fi
  #   for specialty_id in $SPECIALTY_ID_VARIANTS; do
  #     for paper_format_short_code in $PAPER_FORMAT_SHORT_CODE_VARIANTS; #1
  #     do
  #       resume_code="$specialty_id$photo_included$paper_format_short_code"
  #       echo "Optimizing resume: '$resume_code'…"
  #       source="resume-$resume_code-raw.pdf"
  #       target_folder="$host_compressed_artifacts_path"
  #       filename_prefix="utku-sarioglu-resume"
  #       output_file="$target_folder/$filename_prefix-$resume_code.pdf"
  #       mkdir -p "$target_folder"
        
  #       echo "Current user:"
  #       id

  #       echo "Output directory:"
  #       ls -lad $target_folder

  #       echo "Output directory writable?"
  #       test -w $target_folder && echo YES || echo NO

  #       echo "Input file readable?"
  #       test -r $host_raw_artifacts_path/$source && echo YES || echo NO

  #       gs \
  #         -sDEVICE=pdfwrite \
  #         -dCompatibilityLevel=1.4 \
  #         -dPDFSETTINGS=/screen \
  #         -dNOPAUSE \
  #         -dBATCH \
  #         -dNOSAFER \
  #         -sOutputFile="${output_file}" \
  #         -dMaxInlineImageSize=0 \
  #         $photo_params \
  #         "$host_raw_artifacts_path/$source"
      

  #     done

  #   done
  # done

  echo "Ghostscript version:"
  gs --version

  echo "AppArmor status:"
  cat /proc/self/attr/current
  sudo aa-status || true

  echo "Testing /tmp:"
  gs \
    -sDEVICE=pdfwrite \
    -sOutputFile=/tmp/gs-test.pdf \
    -c "showpage"

  echo "Exit code: $?"
  ls -l /tmp/gs-test.pdf 2>&1

  echo "Testing workspace:"
  gs \
    -sDEVICE=pdfwrite \
    -sOutputFile="$host_compressed_artifacts_path/gs-test.pdf" \
    -c "showpage"

  echo "Exit code: $?"
  ls -l "$host_compressed_artifacts_path/gs-test.pdf" 2>&1

  echo "creating at ${host_compressed_artifacts_path}"
  gs \
  -sDEVICE=pdfwrite \
  -dCompatibilityLevel=1.4 \
  -dPDFSETTINGS=/screen \
  -dNOPAUSE \
  -dBATCH \
  -dNOSAFER \
  -sOutputFile="/tmp/gs-test.pdf" \
  -c "showpage" 
  mv /tmp/gs-test.pdf" "${host_compressed_artifacts_path}/gs-test.pdf"
  echo "creating at ${host_compressed_artifacts_path} done"

  echo "Compressed files list:"
  ls -al $host_compressed_artifacts_path
}

echo "PWD: $(pwd)"
echo "WORKDIR: ${work_dir}"
run_gs
