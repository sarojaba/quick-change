import * as React from 'react'

import { ImageProps } from '@quick-change/core'

import { Image } from 'grommet'

export function ImageAdapter({ src, alt, width, height, fluid }: ImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  )
}