import * as React from 'react'

import { AlertProps } from '@quick-change/core'

export function AlertAdapter({ title, type, icon, onClose, children }: AlertProps) {
  return (
    <div className={`terminal-alert ${classNameByType(type)}`}>{children}</div>
  )
}

function classNameByType(type) {
  switch (type) {
    case 'primary':
      return 'terminal-alert-primary'
    case 'danger':
      return 'terminal-alert-error'
    default:
      return ''
  }
}