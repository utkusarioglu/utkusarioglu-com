download_path=.ignore/pdf
log_file=gh.log

function final_things {
  if [ -z "$(cat $log_file)" ]; then
    echo "Downloading..."
    gh run download --name utkusarioglu-com-pdf-artifacts -D $download_path
    gh run view $run_id --log > $log_file
    echo "LOG ALL:"
  else 
    gh run view $run_id --log-failed > $log_file 
    echo "FAILED LOG:"
  fi
  cat $log_file
}



rm -rf $download_path
rm -f $log_file

git add . \
  && git commit -m "$1" \
  && git push \
  && sleep 5 \
  && run_id=$(gh run list --json databaseId -q ".[0].databaseId") \
  && gh run watch $run_id \
  && final_things

# gh run watch $run_id && 
# run download --name utkusarioglu-com-pdf-artifacts -D $download_path
