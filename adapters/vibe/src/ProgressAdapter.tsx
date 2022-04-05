import * as React from 'react'

import { ProgressProps } from '@quick-change/core'

import { LinearProgressBar } from 'monday-ui-react-core'

/**
 * @see 
 */
export function ProgressAdapter({ type, value, max, label, size }: ProgressProps) {
  return (
    <LinearProgressBar
      value={value}
      max={max}
      indicateProgress={label}
    />
  )
}