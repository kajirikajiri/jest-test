#!/usr/bin/env zsh

files=($(find ./src/__e2e__/ -name "*.js" -or -name "*.ts" -or -name "*.mjs"))
for file in $files; do
node -v
node $file
done