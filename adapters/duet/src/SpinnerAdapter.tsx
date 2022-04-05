import * as React from 'react'

import { SpinnerProps } from '@quick-change/core'

import { DuetSpinner as Spinner } from '@duetds/react'

/**
 * @see https://www.duetds.com/components/spinner/
 */
export function SpinnerAdapter({ size }: SpinnerProps) {
  return (
    <Spinner size={size} />
  )
}