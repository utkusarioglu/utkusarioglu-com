terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "4.11.0"
    }
  }
  backend "s3" {
    bucket         = "utkusarioglu-com-dev-state-store"
    key            = "global/s3/terraform.tfstate"
    region         = "eu-central-1"
    dynamodb_table = "utkusarioglu-com-dev-state-lock"
    encrypt        = true
  }
}

provider "aws" {
  alias = "us_west_2"
  region = "us-west-2"
}
