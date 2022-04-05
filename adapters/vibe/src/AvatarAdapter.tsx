import * as React from 'react'

import { AvatarProps } from '@quick-change/core'

import { Avatar } from 'monday-ui-react-core'

/**
 * @see https://style.monday.com/?path=/docs/media-avatar--overview
 */
export function AvatarAdapter({ name, src, size, shape }: AvatarProps) {
  return (
    <Avatar
      src={src}
      size={sizeBySize(size)}
      type={Avatar.types.IMG}
      square={shape === 'square'}
    />
  )
}

function sizeBySize(size) {
  switch (size) {
    case 'small':
      return Avatar.sizes.SMALL
    case 'medium':
      return Avatar.sizes.MEDIUM
    case 'large':
      return Avatar.sizes.LARGE
    default:
      return undefined
  }
}
