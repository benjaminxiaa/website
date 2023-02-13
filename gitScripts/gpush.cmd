git add .

@echo off
set /p "commitMsg=Comment: "

git commit -m "commitMsg"

git push