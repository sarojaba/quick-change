import * as React from 'react'

import { SpinnerProps } from '@quick-change/core'

import { EuiLoadingSpinner } from '@elastic/eui'

/**
 * @see https://elastic.github.io/eui/#/display/loading
 */
export function SpinnerAdapter({ size }: SpinnerProps) {
  return (
    <EuiLoadingSpinner />
  )
}