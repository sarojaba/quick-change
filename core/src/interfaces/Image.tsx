import * as React from 'react'

import { useComponents } from '../providers'

export interface ImageProps {
  src: string,
  alt: string,
  width: number,
  height: number,
  fluid: boolean,
  children: any
}

export function Image({ src, alt, width, height, fluid, children }: ImageProps) {

  const { ImageAdapter } = useComponents()

  return (
    <ImageAdapter
      src={ src }
      width={ width }
      height={ height }
      alt={ alt }
      fluid={ fluid }>
      { children }
    </ImageAdapter>
  )
}
