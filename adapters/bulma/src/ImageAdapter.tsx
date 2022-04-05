import * as React from 'react'

import { ImageProps } from '@quick-change/core'

export function ImageAdapter({ src, alt, width, height, fluid }: ImageProps) {
  const isFluid = fluid ? 'is-fullwidth' : ''
  return (
    <figure className={`image ${isFluid} is-${width}x${height}`}>
      <img src={ src } alt={ alt }
        width={ width } height={ height } />
    </figure>
  )
}