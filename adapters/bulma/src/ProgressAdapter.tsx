import * as React from 'react'

import { ProgressProps } from '@quick-change/core'

export function ProgressAdapter({ type, value, max, label, size }: ProgressProps) {
  const classNameByType =
    type !== undefined
      ? `is-${type}`
      : ''

  return (
    <progress
      className={`progress ${classNameByType}`}
      value={value}
      max={max}
    />
  )
}