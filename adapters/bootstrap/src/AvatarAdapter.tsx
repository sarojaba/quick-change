import * as React from 'react'

import { AvatarProps } from '@quick-change/core'

import { Figure } from 'react-bootstrap'

export function AvatarAdapter({ name, src, size, shape }: AvatarProps) {
  return (
    <Figure>
      <Figure.Image src={src} width={widthBySize(size)} />
    </Figure>
  )
}

function widthBySize(size) {
  switch (size) {
    case 'small':
      return 50
    case 'large':
      return 200
    case 'medium':
    default:
      return 100
  }
}