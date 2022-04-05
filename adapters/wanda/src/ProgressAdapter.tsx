import * as React from 'react'

import { ProgressProps } from '@quick-change/core'

import { LinearProgress } from '@wonderflow/react-components'

/**
 * @see https://design.wonderflow.ai/components/loading/linear-progress
 */
export function ProgressAdapter({ type, value, max, label, size }: ProgressProps) {
  return (
    <LinearProgress value={value} max={max} showProgress={label} />
  )
}