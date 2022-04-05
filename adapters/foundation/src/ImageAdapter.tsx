import * as React from 'react'

import { ImageProps } from '@quick-change/core'

export function ImageAdapter({ src, alt, width, height, fluid }: ImageProps) {
  return (
    <img src={ src } alt={ alt }
        width={ width } height={ height } />
  )
}