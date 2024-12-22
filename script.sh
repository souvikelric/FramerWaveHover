#!/bin/bash

status_report=$(git status --porcelain)

untracked_files=0
staged_files=0


while IFS= read -r line;do 
    if [[ $line =~ ^\?\? ]];then
        ((untracked_files++))
    elif [[ $line =~ ^[AM] ]];then
        ((staged_files++))
    fi
done <<< "$status_report"

echo "Untracked Files: $untracked_files"
echo "Staged Files: $staged_files"
