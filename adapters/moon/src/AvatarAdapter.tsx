import * as React from 'react'

import { AvatarProps } from '@quick-change/core'

import { Avatar } from '@heathmont/moon-components'

export function AvatarAdapter({ name, src, size, shape }: AvatarProps) {
  return (
    <Avatar imageUrl={src} size={size} />
  )
}