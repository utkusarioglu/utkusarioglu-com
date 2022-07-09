#!/bin/bash
scripts/start-ssl-proxy.sh & yarn http-server -p 3000 ./build
