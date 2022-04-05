import * as React from 'react'

import { ProgressProps } from '@quick-change/core'

import { ProgressBar } from '@shopify/polaris'

/**
 * @see https://github.com/Shopify/polaris-react/tree/main/src/components/ProgressBar
 */
export function ProgressAdapter({ type, value, max, label, size }: ProgressProps) {
  return (
    <ProgressBar
      progress={value}
      color={colorByType(type)}
      size={size}
    />
  )
}

function colorByType(type) {
  switch (type) {
    case 'primary':
    case 'success':
      return type
    case 'danger':
      return 'critical'
    default:
      return undefined
  }  
}