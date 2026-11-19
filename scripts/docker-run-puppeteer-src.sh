source .env

export work_dir=/home/pptruser
export host_assets_path=$(pwd)/assets
export host_puppeteer_path=$(pwd)/.puppeteer
export host_artifacts_path=$(pwd)/.puppeteer/artifacts
export host_compressed_artifacts_path=$host_artifacts_path/compressed
export host_raw_artifacts_path=$host_artifacts_path/raw
export node_certificate_authority=$work_dir/.certs/server/ca.crt
export CERTS_FOLDER=$1
