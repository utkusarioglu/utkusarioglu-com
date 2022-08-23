data "http" "mime_types" {
  url = "https://gist.githubusercontent.com/utkusarioglu/50df0e95770d05c17759cc8f4290bfb3/raw/file-extension-to-mime-types.json"

  request_headers = {
    Accept = "application/json"
  }
}
