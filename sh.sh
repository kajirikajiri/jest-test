#!/usr/bin/env zsh

files=($(find ./src/__e2e__/ -name "*.js" -or -name "*.ts" -or -name "*.mjs"))
for file in $files; do
echo $file
node $file
done