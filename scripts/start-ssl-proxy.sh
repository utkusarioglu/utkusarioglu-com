#!/bin/bash
yarn local-ssl-proxy --source 4000 --target 3000 --key ./.certs/domain.key --cert ./.certs/domain.crt
