resource "aws_s3_object" "static_content" {
  provider = aws.us_west_2
  for_each = local.upload_list
  bucket = local.buckets.main
  key = each.value
  source = "${local.build_path}/${each.value}"
  etag = filemd5("${local.build_path}/${each.value}")
  content_type = lookup(local.mime_types, regex("\\.[^.]+$", each.value), null)
}
