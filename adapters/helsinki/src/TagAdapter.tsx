import * as React from 'react'

import { TagProps } from '@quick-change/core'

import { StatusLabel } from 'hds-react'

export function TagAdapter({ type, onClick, onClose, children }: TagProps) {
  return (
    <StatusLabel type={typeByType(type)}>
      {children}
    </StatusLabel>
  )
}

function typeByType(type) {
  switch (type) {
    case 'info':
    case 'success':
      return type
    case 'warning':
      return 'alert'
    case 'danger':
      return 'error'
    default:
      return undefined
  }
}