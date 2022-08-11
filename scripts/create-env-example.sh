#!/bin/bash

# Creates an "*.example" file for the given ".env" by stripping out
# the values and the comments.

find . -type f \( \( \
  -iname "*.env" \
  -or -iname "*.env.*" \) \
  -and -not -iname "*.example" \) | \
    while read env_file;
      do
        echo "Handling $env_file"
        awk -F'=' '{print $1}' $env_file | \
          awk -F'#' '{print $1}' | \
          awk NF > \
          "$env_file.example"
      done
