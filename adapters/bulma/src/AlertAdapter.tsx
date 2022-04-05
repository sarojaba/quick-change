import * as React from 'react'

import { AlertProps } from '@quick-change/core'

import { Notification, Delete } from 'rbx'

export function AlertAdapter({ title, type, icon, onClose, children }: AlertProps) {
  return (
    <Notification color={type}>
      {onClose ? <Delete /> : null}
      {children}
    </Notification>
  )
}