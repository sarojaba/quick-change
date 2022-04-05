import * as React from 'react'

import { AlertProps } from '@quick-change/core'

import { Alert, AlertContainer } from '@salesforce/design-system-react'

export function AlertAdapter({ title, type, icon, onClose, children }: AlertProps) {
  return (
    <AlertContainer>
      <Alert
        labels={{
          heading: children
        }}
        variant={variantByType(type)}
      />
    </AlertContainer>
  )
}

function variantByType(type) {
  switch (type) {
    case 'warning':
      return type
    case 'danger':
      return 'error'
    default:
      return undefined
  }
}