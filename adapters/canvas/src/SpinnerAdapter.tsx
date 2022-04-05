import * as React from 'react'

import { SpinnerProps } from '@quick-change/core'

import { LoadingAnimation } from '@workday/canvas-kit-react'

/**
 * @see https://workday.github.io/canvas-kit/?path=/docs/components-indicators-loading-animation-react--basic
 */
export function SpinnerAdapter({ size }: SpinnerProps) {
  return <LoadingAnimation />
}