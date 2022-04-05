import * as React from 'react'

import { ProgressProps } from '@quick-change/core'

import { EuiProgress } from '@elastic/eui'

import { sizeBySize } from './utils/size'

/**
 * @see https://elastic.github.io/eui/#/display/progress
 */
export function ProgressAdapter({ type, value, max, label, size }: ProgressProps) {
  return (
    <EuiProgress
      value={value}
      max={max}
      size={sizeBySize(size)}
      color={colorByType(type)}
      valueText={label}
    />
  )
}

function colorByType(type) {
  switch (type) {
    case 'primary':
    case 'success':
    case 'warning':
    case 'danger':
      return type
    case 'secondary':
      return 'subdued'
    default:
      return undefined
  }
}
