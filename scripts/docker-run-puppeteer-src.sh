source .env

work_dir=/home/pptruser
host_assets_path=$(pwd)/assets
host_puppeteer_path=$(pwd)/.puppeteer
host_artifacts_path=$(pwd)/.puppeteer/artifacts
host_compressed_artifacts_path=$host_artifacts_path/compressed
host_raw_artifacts_path=$host_artifacts_path/raw
node_certificate_authority=$work_dir/.certs/server/ca.crt
CERTS_FOLDER=$1
