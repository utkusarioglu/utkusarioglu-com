#!/bin/bash

WORKDIR=/utkusarioglu/utkusarioglu-com

docker run -it \
  --rm \
  -v $(pwd)/.cypress:$WORKDIR/cypress \
  -v $(pwd)/scripts:$WORKDIR/scripts \
  -v $(pwd)/cypress.config.js:$WORKDIR/cypress.config.js \
  -w $WORKDIR \
  --entrypoint scripts/run-cypress-tests.js \
  cypress/included:10.0.0 
