import * as React from 'react'

import { ProgressProps } from '@quick-change/core'

import { ProgressLinear } from 'ui-neumorphism'

export function ProgressAdapter({ type, value, max, label, size }: ProgressProps) {
  return (
    <ProgressLinear
      value={value}
      color={colorByType(type)}
      indeterminate={indeterminateByValueAndMax(value, max)}
    />
  )
}

function colorByType(type) {
  switch (type) {
    case 'success':
      return 'var(--success)'
    case 'warning':
      return 'var(--warning)'
    case 'danger':
      return 'var(--error)'
    case 'primary':
    default:
      return 'var(--primary)'
  }
}

function indeterminateByValueAndMax(value, max) {
  return value === undefined && max === undefined
}