#!/bin/bash

if [ -z "$1" ];
then
  echo "First param needs to be the subdomain"
  exit 1
fi

domain=utkusarioglu.com
subdomain=$1

url="$subdomain.$domain"

echo "Retrieving distribution id for '$url'..."
distribution_id=$( \
  aws cloudfront list-distributions \
    --query "\
      DistributionList.Items[].{Id: Id, Url: Aliases.Items[0]} | \
      [?Url=='$url'].Id | [0]\
    " \
    --output text \
)

if [ -z "$distribution_id" ];
then
  echo "Failed to retrieve the distribution id for '$url'"
  exit 1
fi

echo "Creating cloudfront invalidation for id: '$distribution_id'..."
aws cloudfront create-invalidation \
  --distribution-id $distribution_id \
  --paths '/*'
