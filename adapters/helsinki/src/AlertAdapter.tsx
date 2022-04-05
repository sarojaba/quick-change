import * as React from 'react'

import { AlertProps } from '@quick-change/core'

import { Notification } from 'hds-react'

/**
 * @see 
 */
export function AlertAdapter({ title, type, icon, onClose, children }: AlertProps) {
  return (
    <Notification
      type={typeByType(type)}
      dismissible={onClose}
      onClose={onClose}>
      {title}
    </Notification>
  )
}

function typeByType(type) {
  switch (type) {
    case 'success':
      return 'success'
    case 'warning':
      return 'alert'
    case 'danger':
      return 'error'
    default:
      return undefined
  }
}