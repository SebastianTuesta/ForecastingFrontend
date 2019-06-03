#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

git init
git add .
git commit -m 'deploy-finish'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f  https://github.com/SebastianTuesta/ForecastingFrontend.git master:gh-pages

cd -