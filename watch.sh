download_path=.ignore/pdf
rm -rf $download_path
run_id=$(gh run list --json databaseId -q ".[0].databaseId")
gh run watch $run_id && gh run download --name utkusarioglu-com-pdf-artifacts -D $download_path
