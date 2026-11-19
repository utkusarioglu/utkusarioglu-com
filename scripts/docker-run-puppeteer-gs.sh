#!/usr/bin/env bash

source "${0%/*}/docker-run-puppeteer-src.sh"

filename_prefix="utku-sarioglu-resume"

run_gs() {
  if [ -z "$(which gs)" ]; then
    echo "Warn: GhostScript not installed on the host. Installing..."
    apt-get install ghostscript -y
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

  for photo_included in $PHOTO_VARIANTS; do
    if [ $photo_included = 'p' ]; then
      photo_params="-dColorImageResolution=300"
    fi
    for specialty_id in $SPECIALTY_ID_VARIANTS; do
      for paper_format_short_code in $PAPER_FORMAT_SHORT_CODE_VARIANTS; #1
      do
        resume_code="$specialty_id$photo_included$paper_format_short_code"
        echo "Optimizing resume: '$resume_code'…"
        source="resume-$resume_code-raw.pdf"
        target_folder="$host_compressed_artifacts_path"
        filename="$filename_prefix-$resume_code.pdf"
        tmp_file="/tmp/$filename"
        output_file="$target_folder/$filename"
        tmp_raw_file="/tmp/$source"

        cp "$host_raw_artifacts_path/$source" "$tmp_raw_file"

        gs \
          -sDEVICE=pdfwrite \
          -dCompatibilityLevel=1.4 \
          -dPDFSETTINGS=/screen \
          -dNOPAUSE \
          -dBATCH \
          -sOutputFile="${tmp_file}" \
          -dMaxInlineImageSize=0 \
          -dSubsetFonts=true \
          -dCompressFonts=true \
          $photo_params \
          "$tmp_raw_file"

          # -dQUIET \
        mv "${tmp_file}" "${output_file}"

      done

    done
  done

  echo "Compressed files list:"
  ls -al $host_compressed_artifacts_path
}

echo "PWD: $(pwd)"
echo "WORKDIR: ${work_dir}"
run_gs
