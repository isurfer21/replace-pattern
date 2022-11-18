#!/usr/bin/env zsh
pushd . > '/dev/null';
SCRIPT_PATH="${BASH_SOURCE[0]:-$0}";
while [ -h "$SCRIPT_PATH" ];
do
    cd "$( dirname -- "$SCRIPT_PATH"; )";
    SCRIPT_PATH="$( readlink -f -- "$SCRIPT_PATH"; )";
done
cd "$( dirname -- "$SCRIPT_PATH"; )" > '/dev/null';
SCRIPT_PATH="$( pwd; )";
popd  > '/dev/null';
# echo $SCRIPT_PATH
deno run --allow-read --allow-write $SCRIPT_PATH/replace-pattern.js "$@"
