import * as React from 'react'

import { AvatarProps } from '@quick-change/core'

import { Avatar } from '@workday/canvas-kit-react'

/**
 * @see https://workday.github.io/canvas-kit/?path=/docs/components-indicators-avatar-react-default--dark
 */
export function AvatarAdapter({ name, src, size, shape }: AvatarProps) {
  return (
    <Avatar url={src} size={sizeBySize(size)} />
  )
}

function sizeBySize(size) {
  switch (size) {
    case 'small':
      return Avatar.Size.s
    case 'medium':
      return Avatar.Size.m
    case 'large':
      return Avatar.Size.l
    default:
      return undefined
  }
}