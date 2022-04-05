import * as React from 'react'

import { AvatarProps } from '@quick-change/core'

import { Avatar } from '@instructure/ui'

/**
 * @see https://instructure.design/#Avatar
 */
export function AvatarAdapter({ name, src, size, shape }: AvatarProps) {
  return (
    <Avatar
      name={name}
      src={src}
      size={sizeBySize(size)}
      shape={shapeByShape(shape)}
    />
  )
}

function shapeByShape(shape) {
  switch (shape) {
    case 'square':
      return 'rectangle'
    default:
      return 'circle'
  }
}

function sizeBySize(size) {
  switch (size) {
    case 'small':
    case 'medium':
    case 'large':
      return size
    default:
      return undefined
  }
}