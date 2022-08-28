#!/bin/bash

if [ -z "$1" ];
then
  echo "First param needs to be the subdomain"
  exit 1
fi

domain=utkusarioglu.com
subdomain=$1

echo "Retrieving distribution id for $subdomain.$domain..."
distribution_id=$( \
  aws cloudfront list-distributions \
    --query "\
      DistributionList.Items[].{Id: Id, Url: Aliases.Items[0]} | \
      [?Url=='$subdomain.$domain'].Id | [0]\
    " \
    --output text \
)

echo "Creating cloudfront invalidation for id: $distribution_id..."
aws cloudfront create-invalidation \
  --distribution-id $distribution_id \
  --paths "/"
