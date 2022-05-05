resource "aws_s3_object" "static_content" {
  provider = aws.us_west_2
  for_each = fileset(local.build_dir, "**")
  bucket = aws_s3_bucket.state_store.bucket
  key = each.value
  source = "${local.build_dir}/${each.value}"
  etag = filemd5("${local.build_dir}/${each.value}")
}
