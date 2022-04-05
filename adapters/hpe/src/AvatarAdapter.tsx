import * as React from 'react'

import { AvatarProps } from '@quick-change/core'

import { Avatar } from 'grommet'

export function AvatarAdapter({ name, src, size, shape }: AvatarProps) {
  return (
    <Avatar src={src} />
  )
}