import * as React from 'react'

import { SpinnerProps } from '@quick-change/core'

import { Spinner } from '@contentful/f36-components'

/**
 * @see 
 */
export function SpinnerAdapter({ size }: SpinnerProps) {
  return (
    <Spinner size={size} />
  )
}