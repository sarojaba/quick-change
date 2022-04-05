import * as React from 'react'

import { AvatarProps } from '@quick-change/core'

import { Avatar, AvatarSize } from '@class101/ui'

/**
 * @see https://ui.class101.dev/components/avatar
 */
export function AvatarAdapter({ name, src, size, shape }: AvatarProps) {
  return (
    <Avatar
      src={src}
      text={name}
      size={sizeBySize(size)}
    />
  )
}

function sizeBySize(size) {
  switch (size) {
    case 'small':
      return AvatarSize.SMALL
    case 'medium':
      return AvatarSize.MEDIUM
    case 'large':
      return AvatarSize.LARGE
    default:
      return undefined
  }
}