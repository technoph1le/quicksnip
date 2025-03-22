---
title: FFmpeg Image Processor
description: Process multiple images at once using FFmpeg.
author: mishieck
tags: ffmpeg,image-processing
---

```bash
#!/bin/bash

process_images() {
  filenamePattern='(.+)\.[a-zA-Z]+$'
  filenames="$1" # NOTE: Quoted list or glob
  outputExtension=$2 # PNG, JPEG, WEBP, etc
  options=$3 # ffmpeg options

  for filename in $filenames; do
    if [[ $filename =~ $filenamePattern ]]; then
      inputName=${BASH_REMATCH[1]}
      outputFilename="$inputName.$outputExtension"
      ffmpeg -i $filename $options $outputFilename
    fi
  done
}

process_images "$@"

# Usage:
chmod +x ./ffmpeg-image-processor.bash # Make the file executable
./ffmpeg-image-processor.bash 'image-1.png image-2.png' webp # Outputs: image-1.webp image-2.webp

# Given a folder with 'image-1.png image2.png'
./ffmpeg-image-processor.bash './*.png' webp '-compression_level 60' # Outputs: image-1.webp image-2.webp, with 60% compression
```
