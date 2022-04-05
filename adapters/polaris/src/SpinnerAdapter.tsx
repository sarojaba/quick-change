import * as React from 'react'

import { SpinnerProps } from '@quick-change/core'

import { Spinner } from '@shopify/polaris'

/**
 * @see https://github.com/Shopify/polaris-react/tree/main/src/components/Spinner
 */
export function SpinnerAdapter({ size }: SpinnerProps) {
  return (
    <Spinner />
  )
}