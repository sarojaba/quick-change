import * as React from 'react'

import { ProgressProps } from '@quick-change/core'

/**
 * @see 
 */
export function ProgressAdapter({ type, value, max, label, size }: ProgressProps) {
  return (
    <div className={`progress ${typeBy(type, value, max)}`}>
      <div className="bar" style={{width: `${value}%`}} />
      <div className="subtitle">{typeBy(type, value, max)}</div>
    </div>
  )
}

function typeBy(type, value, max) {
  if (value === undefined && max === undefined) {
    return 'indeterminate'
  }

  switch (type) {
    case 'success':
    case 'warning':
      return type
    case 'danger':
      return 'error'
    default:
      return ''
  }
}