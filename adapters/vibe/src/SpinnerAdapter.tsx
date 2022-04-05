import * as React from 'react'

import { SpinnerProps } from '@quick-change/core'

import { Loader } from 'monday-ui-react-core'

/**
 * @see https://style.monday.com/?path=/docs/feedback-loader--overview
 */
export function SpinnerAdapter({ size }: SpinnerProps) {
  return (
    <Loader />
  )
}