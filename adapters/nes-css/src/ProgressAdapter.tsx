import * as React from 'react'

import { ProgressProps } from '@quick-change/core'

export function ProgressAdapter({ type, value, max, label, size }: ProgressProps) {
  return (
    <progress
      className={`nes-progress ${classNameByType(type)}`}
      value={value}
      max={max}
    />
  )
}

function classNameByType(type) {
  if (type === undefined) {
    return ''
  }

  switch (type) {
    case 'danger':
      return 'is-error'
    default:
      return `is-${type}`
  }
}