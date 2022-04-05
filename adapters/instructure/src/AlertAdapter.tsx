import * as React from 'react'

import { AlertProps } from '@quick-change/core'

import { Alert } from '@instructure/ui'

/**
 * @see https://instructure.design/#Alert
 */
export function AlertAdapter({ title, type, icon, onClose, children }: AlertProps) {
  return (
    <Alert
      variant={variantByType(type)}
      renderCloseButtonLabel={onClose ? 'Close' : undefined}
    >
      {title}
    </Alert>
  )
}

function variantByType(type) {
  switch (type) {
    case 'info':
    case 'success':
    case 'warning':
      return type
    case 'danger':
      return 'error'
    default:
      return undefined
  }
}