resource "aws_s3_object" "static_content" {
  provider = aws.us_west_2
  for_each = local.upload_list
  bucket = local.bucket_name
  key = each.value
  source = "${local.build_dir}/${each.value}"
  etag = filemd5("${local.build_dir}/${each.value}")
  content_type = lookup(local.mime_types, regex("\\.[^.]+$", each.value), null)
}
