import * as React from 'react'

import { AvatarProps } from '@quick-change/core'

import { Avatar } from 'baseui/avatar'

/**
 * @see https://baseweb.design/components/avatar
 */
export function AvatarAdapter({ name, src, size, shape }: AvatarProps) {
  return (
    <Avatar
      name="Jane Doe"
      size={sizeBySize(size)}
      src={src}
      overrides={overridesByShape(shape)}
    />
  )
}

function sizeBySize(size) {
  switch (size) {
    case 'small':
      return 'scale800'
    case 'medium':
      return 'scale1000'
    case 'large':
      return 'scale1400'
    default:
      return undefined
  }
}

function overridesByShape(shape: any) {
  switch (shape) {
    case 'square':
      return {
        Avatar: {
          style: ({$theme}) => ({
            borderTopLeftRadius: $theme.borders.radius100,
            borderTopRightRadius: $theme.borders.radius100,
            borderBottomRightRadius: $theme.borders.radius100,
            borderBottomLeftRadius: $theme.borders.radius100,
          }),
        },
        Root: {
          style: ({$theme}) => ({
            borderTopLeftRadius: $theme.borders.radius100,
            borderTopRightRadius: $theme.borders.radius100,
            borderBottomRightRadius: $theme.borders.radius100,
            borderBottomLeftRadius: $theme.borders.radius100,
          }),
        }
      }
    case 'circle':
    default:
      return undefined
  }
}