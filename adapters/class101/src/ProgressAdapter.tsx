import * as React from 'react'

import { ProgressProps } from '@quick-change/core'

import { ProgressBar } from '@class101/ui'

/**
 * @see https://ui.class101.dev/components/progress-bar
 */
export function ProgressAdapter({ type, value, max, label, size }: ProgressProps) {
  return (
    <ProgressBar value={value} />
  )
}