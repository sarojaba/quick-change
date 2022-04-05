import * as React from 'react'

import { ProgressProps } from '@quick-change/core'

import { ProgressBar } from 'react-bootstrap'

export function ProgressAdapter({ type, value, max, label, size }: ProgressProps) {
  return (
    <ProgressBar
      variant={type}
      now={value ? value : 0}
      label={label ? `${value ? value : 0}%` : undefined}
    />
  )
}