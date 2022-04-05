import * as React from 'react'

import { AvatarProps } from '@quick-change/core'

import Avatar from '@atlaskit/avatar'

export function AvatarAdapter({ name, src, size, shape }: AvatarProps) {
  return (
    <Avatar
      appearance={appearanceBySahpe(shape)}
      src={src}
      size={sizeBySize(size)}
    />
  )
}

function appearanceBySahpe(shape) {
  return shape
}

function sizeBySize(size) {
  return size
}