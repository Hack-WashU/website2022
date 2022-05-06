#!/usr/bin/env sh
set -e
npm run build
cd dist
echo 'www.hackwashu.io' > CNAME
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:Hack-WashU/website.git main:gh-pages
cd -
