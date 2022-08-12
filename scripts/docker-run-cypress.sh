#!/bin/bash

source .env
WORKDIR=/utkusarioglu/utkusarioglu-com

docker run \
  --rm \
  -t \
  -v $(pwd)/.cypress:$WORKDIR/cypress \
  -v $(pwd)/scripts:$WORKDIR/scripts \
  -v $(pwd)/cypress.config.js:$WORKDIR/cypress.config.js \
  -v $CERTS_FOLDER/server:$WORKDIR/.certs/server  \
  -v $CERTS_FOLDER/root:$WORKDIR/.certs/root  \
  -w $WORKDIR \
  --env-file $(pwd)/.env \
  --name utkusarioglu-com-cypress-tests \
  --add-host target-http-server:host-gateway \
  --entrypoint scripts/run-cypress-tests.js \
  cypress/included:10.0.0 
