import * as React from 'react'

import { ImageProps } from '@quick-change/core'

import { Image, Flex } from '@adobe/react-spectrum'

export function ImageAdapter({ src, alt, width, height, fluid }: ImageProps) {
  
  const content = <Image src={src} alt={alt} />

  return width
    ? <Flex width={width}>{content}</Flex>
    : content
}