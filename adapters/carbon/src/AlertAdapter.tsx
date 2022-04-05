import * as React from 'react'

import { AlertProps } from '@quick-change/core'

import { InlineNotification } from 'carbon-components-react'

export function AlertAdapter({ title, type, icon, onClose, children }: AlertProps) {
  return (
    <InlineNotification kind={kindByType(type)}>
      {children}
    </InlineNotification>
  )
}

function kindByType(type) {
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