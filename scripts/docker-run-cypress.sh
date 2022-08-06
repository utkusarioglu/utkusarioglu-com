#!/bin/bash

WORKDIR=/utkusarioglu/utkusarioglu-com

docker run \
  --rm \
  -t \
  -v $(pwd)/.cypress:$WORKDIR/cypress \
  -v $(pwd)/scripts:$WORKDIR/scripts \
  -v $(pwd)/cypress.config.js:$WORKDIR/cypress.config.js \
  -w $WORKDIR \
  --add-host target-http-server:host-gateway \
  --entrypoint scripts/run-cypress-tests.js \
  cypress/included:10.0.0 
