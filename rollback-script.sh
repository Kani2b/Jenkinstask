#!/bin/bash

# Rollback script for resetting the failed new build to the previous build

# Navigate to the project directory
cd /home/ubuntu/Jenkinstask

# Get the hash of the previous commit
PREVIOUS_COMMIT=$(git log --pretty=format:'%h' -n 1 HEAD^)

# Reset to the previous commit
git reset --hard $PREVIOUS_COMMIT

# Force-push to update the remote repository (use with caution)
# git push origin HEAD --force

# Additional rollback steps if needed
# ...

# Notify about successful rollback
echo "Rollback completed successfully"

