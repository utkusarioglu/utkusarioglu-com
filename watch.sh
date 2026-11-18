download_path=.ignore/pdf
log_file=failed.log

function done {
  if [ ! -z "$(cat failed.log)" ]; then
    echo "Downloading..."
    gh run download --name utkusarioglu-com-pdf-artifacts -D $download_path
  else 
    echo "FAILED LOG:"
    cat $log_file
  fi
}

rm -rf $download_path
rm $log_file
run_id=$(gh run list --json databaseId -q ".[0].databaseId")

gh run watch $run_id \
  && gh run view $run_id --log-failed > $log_file \
  && done

# gh run watch $run_id && 
# run download --name utkusarioglu-com-pdf-artifacts -D $download_path
