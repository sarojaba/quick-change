import * as React from 'react'

import { ProgressProps } from '@quick-change/core'

export function ProgressAdapter({ type, value, max, label, size }: ProgressProps) {
  return (
    <div className="progress margin-bottom">
      <div className={`bar ${type} w-${value}`} />
    </div>
  )
}