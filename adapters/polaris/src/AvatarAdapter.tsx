import * as React from 'react'

import { AvatarProps } from '@quick-change/core'

import { Avatar } from '@shopify/polaris'

/**
 * @see https://storybook.polaris.shopify.com/?path=/docs/all-components-avatar--default-avatar
 */
export function AvatarAdapter({ name, src, size, shape }: AvatarProps) {
  return (
    <Avatar source={src} size={sizeBySize(size)} />
  )
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