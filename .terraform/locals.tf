locals {
  default_tags = {
    Repo = "utkusarioglu-com"
    StateStore = "arn:aws:s3:::utkusarioglu-com-state-store"
    Admin = "aws-automation-setup.utkusarioglu.github"
  }
  build_path = "../build"
  buckets = {
    main = "utkusarioglu-com-static-content"
    dev = "utkusarioglu-com-dev-content"
  }
  mime_types = jsondecode(data.http.mime_types.body)
  upload_list = fileset("${local.build_path}/", "**")
}
