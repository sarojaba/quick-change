import * as React from 'react'

import { ImageProps } from '@quick-change/core'

import { Image } from 'gestalt'

export function ImageAdapter({ src, alt, width, height, fluid }: ImageProps) {
  return (
    <Image
      src={src} alt={alt}
      naturalWidth={width} naturalHeight={height}
      color="transparent"
    />
  )
}