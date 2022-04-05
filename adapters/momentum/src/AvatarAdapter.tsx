import * as React from 'react'

import { AvatarProps } from '@quick-change/core'

import { Avatar } from '@momentum-ui/react'

/**
 * @see https://momentum.design/components/avatar
 */
export function AvatarAdapter({ name, src, size, shape }: AvatarProps) {
  return (
    <Avatar
      title={name}
      src={src}
      size={size}
    />
  )
}