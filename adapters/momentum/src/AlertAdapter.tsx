import * as React from 'react'

import { AlertProps } from '@quick-change/core'

import { AlertBanner } from '@momentum-ui/react'

/**
 * @see https://momentum.design/components/alert-banner
 */
export function AlertAdapter({ title, type, icon, onClose, children }: AlertProps) {
  return (
    <AlertBanner
      show
      closable={onClose}
      onHide={onClose}
      type={typeByType(type)}
    >
      {title}
    </AlertBanner>
  )
}

function typeByType(type) {
  switch (type) {
    case 'warning':
      return type
    case 'danger':
      return 'error'
    default:
      return undefined
  }
}