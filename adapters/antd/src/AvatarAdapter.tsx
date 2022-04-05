import * as React from 'react'

import { AvatarProps } from '@quick-change/core'

import { Avatar } from 'antd'

export function AvatarAdapter({ name, src, size, shape }: AvatarProps) {
  return (
    <Avatar
      src={src}
      size={sizeBySize(size)}
      shape={shapeByShape(shape)}
    />
  )
}

function sizeBySize(size) {
  switch (size) {
    case 'small':
    case 'large':
      return size
    default:
      return undefined
  }
}

/**
 * @todo workaround for type mismatch
 */
function shapeByShape(shape) {
  switch (shape) {
    default:
      return shape
  }
}