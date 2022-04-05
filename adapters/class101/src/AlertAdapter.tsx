import * as React from 'react'

import { AlertProps } from '@quick-change/core'

import { Callout, CalloutStatus } from '@class101/ui'

/**
 * @see https://ui.class101.dev/components/callout
 */
export function AlertAdapter({ title, type, icon, onClose, children }: AlertProps) {
  return (
    <Callout
      title={title}
      status={statusByType(type)}
    >
      {children}
    </Callout>
  )
}

function statusByType(type) {
  switch (type) {
    case 'success':
      return CalloutStatus.SUGGEST
    case 'warning':
      return CalloutStatus.WARNING
    case 'danger':
      return CalloutStatus.DANGER
    default:
      return CalloutStatus.DEFAULT
  }
}