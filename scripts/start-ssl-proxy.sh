#!/bin/bash

echo "Starting local-ssl-proxy"
yarn local-ssl-proxy \
  --source 443 \
  --target 3000 \
  --key ./.certs/server/tls.key \
  --cert ./.certs/server/chain.crt

curl www.utkusarioglu.com
curl localhost:3000
curl 127.0.0.1:3000
