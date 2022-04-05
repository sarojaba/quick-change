import * as React from 'react'

import { AlertProps } from '@quick-change/core'

import { Note } from '@geist-ui/core'

export function AlertAdapter({ title, type, icon, onClose, children }: AlertProps) {
  return (
    <Note
      type={typeByType(type)}
      label={labelByType(type)}>
      {children}
    </Note>
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

function labelByType(type) {
  switch (type) {
    case 'success':
    case 'warning':
      return type
    case 'danger':
      return 'error'
    default:
      return undefined
  }
}