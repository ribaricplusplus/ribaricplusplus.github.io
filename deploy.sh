#!/bin/bash

yarn build-all
git checkout --orphan new-master
git rm --cached -rf .
printf "*\n" > .gitignore
printf "%s\n" "!dist" "!dist/**" "!index.html" "!.gitignore"  >> .gitignore
git add .gitignore
git commit -m "Add gitignore"
git add dist index.html
git commit -m "Deploy"
git branch -D master
git branch -m master
git push -f origin master
git checkout source