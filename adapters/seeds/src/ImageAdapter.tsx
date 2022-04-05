import * as React from 'react'

import { ImageProps } from '@quick-change/core'

import { Image } from '@sproutsocial/racine'

/**
 * @see https://seeds.sproutsocial.com/components/image
 */
export function ImageAdapter({ src, alt, width, height, fluid }: ImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
    />
  )
}