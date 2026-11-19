#!/bin/bash

source ${0%/*}/docker-run-puppeteer-src.sh

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
    --network=host \
    -v "$host_puppeteer_path/src:$work_dir/src" \
    -v "$host_assets_path/resume-multi.yml:$work_dir/assets/resume-multi.yml" \
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

clean_artifacts && run_docker 

          # --permit-file-write="$target_folder/*" \
