import * as React from 'react'

import { AvatarProps } from '@quick-change/core'

import { Avatar } from 'evergreen-ui'

/**
 * @see https://evergreen.segment.com/components/avatar
 */
export function AvatarAdapter({ name, src, size, shape }: AvatarProps) {
  return (
    <Avatar name={name} src={src} size={40} />
  )
}