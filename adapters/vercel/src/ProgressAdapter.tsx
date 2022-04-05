import * as React from 'react'

import { ProgressProps } from '@quick-change/core'

import { Progress } from '@geist-ui/core'

export function ProgressAdapter({ type, value, max, label, size }: ProgressProps) {  
  return (
    <Progress
      type={typeByType(type)}
      value={value}
      max={max}
    />
  )
}

function typeByType(type) {
  switch (type) {
    case 'secondary':
    case 'success':
    case 'warning':
      return type
    case 'danger':
      return 'error'
    default:
      return undefined
  }
}