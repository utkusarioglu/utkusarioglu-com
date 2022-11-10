#!/bin/bash

echo "Starting local-ssl-proxy"
yarn local-ssl-proxy \
  --source 443 \
  --target 3000 \
  --key ./.certs/server/private/server.key \
  --cert ./.certs/server/certs/chain.crt
