import * as React from 'react'

import { ImageProps } from '@quick-change/core'

import { Image } from 'semantic-ui-react'

export function ImageAdapter({ src, alt, width, height, fluid }: ImageProps) {
  return (
    <Image src={src} fluid={fluid} />
  )
}