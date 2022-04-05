import * as React from 'react'

import { AlertProps } from '@quick-change/core'

import { Toast } from 'monday-ui-react-core'

/**
 * @see https://style.monday.com/?path=/docs/feedback-toast--overview
 */
export function AlertAdapter({ title, type, icon, onClose, children }: AlertProps) {
  return (
    <Toast open
      type={typeByType(type)}
      onClose={onClose}
    >
      {children}
    </Toast>
  )
}

function typeByType(type) {
  switch (type) {
    case 'success':
      return Toast.types.POSITIVE
    case 'danger':
      return Toast.types.NEGATIVE
    default:
      return undefined
  }
}