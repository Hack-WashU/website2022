#!/usr/bin/env sh
set -e
npm run build
cd dist
echo 'www.hackwashu.io' > CNAME
git init
git add -A
git commit -m 'deploy'
git config --global user.email "organizer@hackwashu.io"
git config --global user.name "Github Action"
git push -f git@github.com:Hack-WashU/website.git master:gh-pages
cd -
