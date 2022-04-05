import * as React from 'react'

import { AlertProps } from '@quick-change/core'

import { Alert } from 'evergreen-ui'

/**
 * @see https://evergreen.segment.com/components/alert
 */
export function AlertAdapter({ title, type, icon, onClose, children }: AlertProps) {
  return (
    <Alert
      intent={intentByType(type)}
      title={title}
      hasIcon={icon}
      isRemoveable={onClose}
      onRemove={onClose}
      marginBottom={32}
    >
      {children}
    </Alert>
  )
}

function intentByType(type) {
  switch (type) {
    case 'info':
      return 'none'
    case 'success':
    case 'warning':
    case 'danger':
      return type
    default:
      return undefined
  }
}