# ========================================================
# This script is used to set up slds in the /public folder
# ========================================================

#!/usr/bin/env bash

set -o errexit
set -o nounset
set -o xtrace

# Make folder path if it does not exist yet
mkdir -p "public/assets/slds"

# Clear all existing content
rm -rf public/assets/slds/*

# Copy Salesforce css
cp -f "./node_modules/@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.min.css" "public/assets/slds"

# Copy Salesforce icon svgs
cp -r "./node_modules/@salesforce-ux/design-system/assets/icons" "public/assets/slds"

# Copy Salesforce images / illustrations
cp -r "./node_modules/@salesforce/design-system-react/assets/images" "public/assets/slds"
