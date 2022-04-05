import * as React from 'react'

import { ImageProps } from '@quick-change/core'

import { WiredImage } from 'react-wired-elements'

export function ImageAdapter({ src, alt, width, height, fluid }: ImageProps) {
  return (
    <WiredImage
      src={src}
      width={width} height={height}
      alt={alt}
    />
  )
}