import * as React from 'react'

import { SpinnerProps } from '@quick-change/core'

/**
 * @see https://momentum.design/components/loader
 */
export function SpinnerAdapter({ size }: SpinnerProps) {
  return (
    <i className="md-spinner md-spinner--36 md-spinner--black" />
  )
}