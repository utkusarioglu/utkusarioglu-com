download_path=.ignore/pdf
rm -rf $download_path
run_id=$(gh run list --json databaseId -q ".[0].databaseId")
# gh run watch $run_id && gh run download --name utkusarioglu-com-pdf-artifacts -D $download_path

gh run watch $run_id && gh run view $run_id --log-failed > failed.log | cat failed.log
# run download --name utkusarioglu-com-pdf-artifacts -D $download_path
