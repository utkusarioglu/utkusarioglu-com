locals {
  default_tags = {
    Repo = "utkusarioglu-com"
    Branch = "dev"
    StateStore = "arn:aws:s3:::utkusarioglu-com-dev-state-store"
    Admin = "aws-automation-setup.utkusarioglu.github"
  }
  build_path = "../../build"
  bucket = "utkusarioglu-com-dev-static-content"
  mime_types = jsondecode(data.http.mime_types.body)
  upload_list = fileset("${local.build_path}/", "**")
}
