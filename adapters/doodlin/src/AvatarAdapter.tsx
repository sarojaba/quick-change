import * as React from 'react'

import { AvatarProps } from '@quick-change/core'

import { Avatar } from 'doodlin-design-system'

/**
 * @see https://design.doodlin.co.kr/?path=/story/component-avatar--default
 */
export function AvatarAdapter({ name, src, size, shape }: AvatarProps) {
  return (
    <Avatar
      src={src}
      name={name}
      size={sizeBySize(size)}
      variant={variantByShape(shape)}
    />
  )
}

function sizeBySize(size) {
  switch (size) {
    case 'small':
      return 'sm'
    case 'medium':
      return 'md'
    case 'large':
      return 'lg'
    default:
      return undefined
  }
}

function variantByShape(shape) {
  switch (shape) {
    case 'square':
      return 'workspace'
    default:
      return 'profile'
  }
}