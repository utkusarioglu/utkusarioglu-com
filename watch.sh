download_path=.ignore/pdf
log_file=failed.log

function final_things {
  if [ -z "$(cat $log_file)" ]; then
    echo "Downloading..."
    gh run download --name utkusarioglu-com-pdf-artifacts -D $download_path
  else 
    echo "FAILED LOG:"
    cat $log_file
  fi
}

rm -rf $download_path
rm -f $log_file
run_id=$(gh run list --json databaseId -q ".[0].databaseId")

git add . \
  && git commit -m "$1" \
  && git push \
  && sleep 5 \
  && gh run watch $run_id \
  && gh run view $run_id --log-failed > $log_file \
  && final_things

# gh run watch $run_id && 
# run download --name utkusarioglu-com-pdf-artifacts -D $download_path
