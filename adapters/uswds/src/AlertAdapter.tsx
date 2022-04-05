import * as React from 'react'

import { AlertProps, useSettings } from '@quick-change/core'

import { Alert } from '@trussworks/react-uswds'

export function AlertAdapter({ title, type, icon, onClose, children }: AlertProps) {
  const { strict } = useSettings()

  return (
    <Alert
      type={typeByType(type, strict)}
      slim
      noIcon={!icon}
    >
      {children}
    </Alert>
  )
}

function typeByType(type, strict: boolean) {
  switch (type) {
    case 'info':
    case 'success':
    case 'warning':
      return type
    case 'danger':
      return 'error'
    default:
      if (strict) {
        throw Error(`Not supported type: ${type}`)
      }
      return undefined
  }
}