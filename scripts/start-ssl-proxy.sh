#!/bin/bash
yarn local-ssl-proxy \
  --source 4000 \
  --target 3000 \
  --key ./.certs/server.key \
  --cert ./.certs/server.crt
