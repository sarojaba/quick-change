import * as React from 'react'

import { SpinnerProps } from '@quick-change/core'

import { Loader } from '@sproutsocial/racine'

/**
 * @see https://seeds.sproutsocial.com/components/loader
 */
export function SpinnerAdapter({ size }: SpinnerProps) {
  return (
    <Loader
      delay={false}
      size={sizeBySize(size)}
    />
  )
}

function sizeBySize(size) {
  switch (size) {
    case 'small':
    case 'large':
      return size
    case 'medium':
    default:
      return undefined
  }
}