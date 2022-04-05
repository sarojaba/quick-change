import * as React from 'react'

import { SpinnerProps } from '@quick-change/core'

import { LoadingSpinner } from 'hds-react'

/**
 * @see https://hds.hel.fi/storybook/react/?path=/story/components-loadingspinner--default
 */
export function SpinnerAdapter({ size }: SpinnerProps) {
  return <LoadingSpinner />
}