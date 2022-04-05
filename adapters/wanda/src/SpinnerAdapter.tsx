import * as React from 'react'

import { SpinnerProps } from '@quick-change/core'

import { Spinner } from '@wonderflow/react-components'

/**
 * @see https://design.wonderflow.ai/components/loading/spinner
 */
export function SpinnerAdapter({ size }: SpinnerProps) {
  return (
    <Spinner />
  )
}