#!/bin/bash

source .env
work_dir=/home/pptruser
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
    -v "$host_artifacts_path:$work_dir/artifacts" \
    -v $CERTS_FOLDER:$work_dir/.certs  \
    --rm \
    --name utkusarioglu-com-puppeteer-pdf \
    ghcr.io/puppeteer/puppeteer:latest \
    bash -c "\
      echo 'Sleeping for 60…'
      sleep 60
      echo 'Starting curl--------'
      echo 'localhost:3000:'
      curl localhost:3000
      echo '127.0.0.1:3000:'
      curl 127.0.0.1:3000
      echo 'www.utkusarioglu.com:3000:'
      curl www.utkusarioglu.com:3000
      echo 'www.utkusarioglu.com:'
      curl www.utkusarioglu.com
      echo 'Done with curl---------'

      cd ./node_modules/puppeteer;
      npm install;
      cd ../..;
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
