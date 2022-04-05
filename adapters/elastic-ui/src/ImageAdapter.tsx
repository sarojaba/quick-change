import * as React from 'react'

import { ImageProps } from '@quick-change/core'

import { EuiImage } from '@elastic/eui'

/**
 * @see https://elastic.github.io/eui/#/display/image
 */
export function ImageAdapter({ src, alt, width, height, fluid }: ImageProps) {
  return (
    <EuiImage
      src={src}
      alt={alt}
    />
  )
}