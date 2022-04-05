import * as React from 'react'

import { AvatarProps } from '@quick-change/core'

import { Avatar } from '@sproutsocial/racine'

/**
 * @see https://seeds.sproutsocial.com/components/avatar/
 */
export function AvatarAdapter({ name, src, size, shape }: AvatarProps) {
  return (
    <Avatar 
      appearance={appearanceByShape(shape)}
      name={name}
      src={src}
      size={sizeBySize(size)}
    />
  )
}

function appearanceByShape(shape) {
  switch (shape) {
    case 'circle':
      return shape
    case 'square':
      return 'leaf'
    default:
      return undefined
  }  
}

function sizeBySize(size) {
  switch (size) {
    case 'small':
      return '20px'
    case 'medium':
      return '40px'
    case 'large':
      return '60px'
    default:
      return undefined
  }
}