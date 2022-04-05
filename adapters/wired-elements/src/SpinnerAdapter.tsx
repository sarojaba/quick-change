import * as React from 'react'

import { SpinnerProps } from '@quick-change/core'

import { WiredSpinner } from 'react-wired-elements'

export function SpinnerAdapter({ size }: SpinnerProps) {
  return (
    <WiredSpinner spinning />
  )
}