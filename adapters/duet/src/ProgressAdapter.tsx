import * as React from 'react'

import { ProgressProps } from '@quick-change/core'

import { DuetProgress as Progress } from '@duetds/react'

/**
 * @see https://www.duetds.com/components/progress/
 */
export function ProgressAdapter({ type, value, max, label, size }: ProgressProps) {
  return (
    <Progress
      progress={value}
      height={heightBySize(size)}
    />
  )
}

function heightBySize(size) {
  switch (size) {
    case 'small':
      return '5px'
    case 'medium':
      return '10px'
    case 'large':
      return '20px'
    default:
      return undefined
  }
}