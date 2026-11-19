source .env

EXPORT work_dir=/home/pptruser
EXPORT host_assets_path=$(pwd)/assets
EXPORT host_puppeteer_path=$(pwd)/.puppeteer
EXPORT host_artifacts_path=$(pwd)/.puppeteer/artifacts
EXPORT host_compressed_artifacts_path=$host_artifacts_path/compressed
EXPORT host_raw_artifacts_path=$host_artifacts_path/raw
EXPORT node_certificate_authority=$work_dir/.certs/server/ca.crt
EXPORT CERTS_FOLDER=$1
