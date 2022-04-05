import * as React from 'react'

import { ImageProps } from '@quick-change/core'

import { Img } from '@instructure/ui'

/**
 * @see https://instructure.design/#Img
 */
export function ImageAdapter({ src, alt, width, height, fluid }: ImageProps) {
  return (
    <Img src={src} alt={alt} width={width} height={height} />
  )
}