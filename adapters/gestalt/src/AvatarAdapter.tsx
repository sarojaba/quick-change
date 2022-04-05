import * as React from 'react'

import { AvatarProps } from '@quick-change/core'

import { Avatar } from 'gestalt'

export function AvatarAdapter({ name, src, size, shape }: AvatarProps) {
  return (
    <Avatar name={undefined} src={src} size={sizeBySize(size)} />
  )
}

function sizeBySize(size) {
  switch (size) {
    case 'small':
      return 'sm'
    case 'medium':
      return 'md'
    case 'large':
      return 'lg'
    default:
      return undefined
  }
}