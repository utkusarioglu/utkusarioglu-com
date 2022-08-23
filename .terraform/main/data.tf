data "http" "mime_types" {
  url = "https://gist.githubusercontent.com/utkusarioglu/50df0e95770d05c17759cc8f4290bfb3/raw/27c8b1e28ce4c3aff0c0d8d3d7dbcb099a22c889/file-extension-to-mime-types.json"

  request_headers = {
    Accept = "application/json"
  }
}
