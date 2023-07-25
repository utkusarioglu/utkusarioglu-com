#!/bin/bash

source .env
work_dir=/home/pptruser
host_puppeteer_path=$(pwd)/.puppeteer
host_artifacts_path=$(pwd)/.puppeteer/artifacts
host_compressed_artifacts_path=$host_artifacts_path/compressed
host_raw_artifacts_path=$host_artifacts_path/raw
node_certificate_authority=$work_dir/.certs/server/ca.crt

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
  echo 'look here host ---'
  pwd
  echo $CERTS_FOLDER
  ls $CERTS_FOLDER
  ls $CERTS_FOLDER/server
  cat $CERTS_FOLDER/server/ca.crt
  echo 'look here host ---'
  docker run -i \
    --init \
    --cap-add=SYS_ADMIN \
    --add-host www.utkusarioglu.com:host-gateway \
    -v "$host_puppeteer_path/src:$work_dir/src" \
    -v "$host_artifacts_path:$work_dir/artifacts" \
    -v $CERTS_FOLDER:$work_dir/.certs  \
    --rm \
    --name utkusarioglu-com-puppeteer-pdf \
    ghcr.io/puppeteer/puppeteer:latest \
    bash -c "\
      cd ./node_modules/puppeteer;
      npm install;
      cd ../..;
      echo 'look here --'
      pwd
      ls $work_dir
      ls $work_dir/.certs
      ls $work_dir/.certs/server
      echo 'look here --'
      export NODE_EXTRA_CA_CERTS="$node_certificate_authority"; 
      node '$work_dir/src/index.js';
    "
}

run_gs() {
  # You also need to set the format settings in 
  # `.puppeteer/src/index.js` for everything to work as expected
  for format in a4 letter;
  do
    source="resume-$format.pdf"
    target_folder="$host_compressed_artifacts_path/$format"
    mkdir -p "$target_folder"
    gs \
      -sDEVICE=pdfwrite \
      -dCompatibilityLevel=1.4 \
      -dPDFSETTINGS=/screen \
      -dNOPAUSE \
      -dQUIET \
      -dBATCH \
      -sOutputFile="$target_folder/utku-sarioglu-resume.pdf" \
      "$host_raw_artifacts_path/$source"
  done
}

clean_artifacts && run_docker && run_gs
