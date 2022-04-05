import * as React from 'react'

import { SpinnerProps } from '@quick-change/core'

import { Spinner } from '@instructure/ui'

/**
 * @see https://instructure.design/#Spinner
 */
export function SpinnerAdapter({ size }: SpinnerProps) {
  return (
    <Spinner />
  )
}