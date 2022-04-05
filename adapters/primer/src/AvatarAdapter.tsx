import * as React from 'react'

import { AvatarProps } from '@quick-change/core'

import { Avatar } from '@primer/react'

/**
 * @see https://primer.style/react/Avatar
 */
export function AvatarAdapter({ name, src, size, shape }: AvatarProps) {
  return (
    <Avatar src={src} />
  )
}