import * as React from 'react'

import { AlertProps } from '@quick-change/core'

import { EuiCallOut } from '@elastic/eui'

/**
 * @see https://elastic.github.io/eui/#/display/callout
 */
export function AlertAdapter({ title, type, icon, onClose, children }: AlertProps) {
  return (
    <EuiCallOut
      title={children}
      color={colorByType(type)}
    />
  )
}

function colorByType(type) {
  switch (type) {
    case 'success':
    case 'warning':
    case 'danger':
      return type
    default:
      return undefined
  }
}