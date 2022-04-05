import * as React from 'react'

import { SpinnerProps } from '@quick-change/core'

import { Spinner } from 'web-toolkit'

/**
 * @see https://romgrk.github.io/web-toolkit/docs/component/spinner
 */
export function SpinnerAdapter({ size }: SpinnerProps) {
  return (
    <Spinner />
  )
}