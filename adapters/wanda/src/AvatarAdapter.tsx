import * as React from 'react'

import { AvatarProps } from '@quick-change/core'

import { Avatar } from '@wonderflow/react-components'

/**
 * @see https://design.wonderflow.ai/components/other/avatar
 */
export function AvatarAdapter({ name, src, size, shape }: AvatarProps) {
  return (
    <Avatar
      src={src}
      dimension={dimesionBySize(size)}
    />
  )
}

function dimesionBySize(size) {
  switch (size) {
    case 'small':
      return 'small'
    case 'medium':
      return 'regular'
    case 'large':
      return 'big'
    default:
      return undefined
  }
}