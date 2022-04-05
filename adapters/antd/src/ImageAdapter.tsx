import * as React from 'react'

import { ImageProps } from '@quick-change/core'

import { Image } from 'antd'

export function ImageAdapter({ src, alt, width, height, fluid }: ImageProps) {
  return (
    <Image
      src={src}
      width={width}
      height={height}
      alt={alt}
    />
  )
}