import * as React from 'react'

import { SpinnerProps } from '@quick-change/core'

import { Spinner } from 'doodlin-design-system'

/**
 * @see https://design.doodlin.co.kr/?path=/story/component-spinner--default
 */
export function SpinnerAdapter({ size }: SpinnerProps) {
  return (
    <Spinner size={sizeBySize(size)} />
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