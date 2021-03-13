#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run export

# navigate into the build output directory
cd docs/

# _next support
touch .nojekyll

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to github.com/<REPO>
git push -f git@github.com:kevincobain2000/engineer-vocabulary-list.git master:gh-pages

cd -