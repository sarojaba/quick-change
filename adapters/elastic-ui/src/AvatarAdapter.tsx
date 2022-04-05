import * as React from 'react'

import { AvatarProps } from '@quick-change/core'

import { EuiAvatar } from '@elastic/eui'

import { sizeBySize } from './utils/size'

/**
 * @see https://elastic.github.io/eui/#/display/avatar
 */
export function AvatarAdapter({ name, src, size, shape }: AvatarProps) {
  return (
    <EuiAvatar
      size={sizeBySize(size)}
      name={name}
      imageUrl={src}
    />
  )
}
