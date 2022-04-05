import * as React from 'react'

import { AvatarProps } from '@quick-change/core'

import { Avatar } from 'ui-neumorphism'

export function AvatarAdapter({ name, src, size, shape }: AvatarProps) {
  return (
    <Avatar
      src={src}
      square={squareByShape(shape)}
      size={size}
    />
  )
}

function squareByShape(shape) {
  return shape === 'square'
}