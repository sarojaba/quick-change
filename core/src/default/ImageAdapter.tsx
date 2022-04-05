import * as React from 'react'

import { ImageProps } from '../interfaces'

/**
 * @see https://developer.mozilla.org/ko/docs/Web/HTML/Element/img
 */
export function ImageAdapter({ src, alt, width, height, fluid }: ImageProps) {
  return (
    <img
      src={src}
      width={width} height={height}
      alt={alt}
    />
  )
}