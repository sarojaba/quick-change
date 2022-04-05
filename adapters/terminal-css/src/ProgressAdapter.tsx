import * as React from 'react'

import { ProgressProps } from '@quick-change/core'

export function ProgressAdapter({ type, value, max, label, size }: ProgressProps) {
  return (
    <div className={`progress-bar ${label ? 'progress-bar-show-percent' : ''}`}>
      <div className="progress-bar-filled" style={{width: `${value}%`}} />
    </div>
  )
}