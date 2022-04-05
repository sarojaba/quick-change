import * as React from 'react'

import { ProgressProps } from '@quick-change/core'

export function ProgressAdapter({ type, value, max, label, size }: ProgressProps) {
  return (
    <progress role="progressbar" value={value} max={max} />
  )
}