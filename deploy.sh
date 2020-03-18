#!/bin/bash

yarn build-all
git checkout --orphan new-master
git rm --cached -rf .
rm .gitignore
git add dist index.html
git commit -m "Deploy"
git branch -D master
git branch -m master
#git push -f origin master
#git checkout source