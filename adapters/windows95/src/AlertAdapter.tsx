import * as React from 'react'

import { AlertProps } from '@quick-change/core'

import { Alert } from '@react95/core'

/**
 * @see https://react95.github.io/React95/?path=/story/alert--simple
 */
export function AlertAdapter({ title, type, icon, onClose, children }: AlertProps) {
  return (
    <Alert
      title={title}
      type={typeByType(type)}
      message={children}
      closeAlert={onClose}
    />
  )
}

function typeByType(type) {
  switch (type) {
    case 'info':
    case 'warning':
      return type
    case 'danger':
      return 'error'
    default:
      return 'question'
  }
}