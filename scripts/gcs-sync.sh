#!/usr/bin/env bash
set -euo pipefail

# Usage:
#   GCS_URI=gs://creative_data_base/video \
#   GOOGLE_APPLICATION_CREDENTIALS=~/secrets/your-service-account.json \
#   bash scripts/gcs-sync.sh

if ! command -v gsutil >/dev/null 2>&1; then
  echo "gsutil not found. Install Google Cloud SDK: brew install --cask google-cloud-sdk" >&2
  exit 1
fi

: "${GCS_URI:?Set GCS_URI to your destination, e.g. gs://creative_data_base/video}"

SRC_DIR="public/visuals/videos"
if [ ! -d "$SRC_DIR" ]; then
  echo "Source directory '$SRC_DIR' does not exist." >&2
  exit 1
fi

echo "Uploading mp4s from $SRC_DIR to $GCS_URI ..."
gsutil -m -h "Cache-Control:public,max-age=31536000,immutable" \
  -h "Content-Type:video/mp4" \
  cp -r "$SRC_DIR"/* "$GCS_URI"/

echo "Done. Example URL: https://storage.googleapis.com/$(echo "$GCS_URI" | sed -E 's@^gs://([^/]+)/?.*$@\1@')/$(echo "$GCS_URI" | sed -E 's@^gs://[^/]+/@@')/yourfile.mp4"


