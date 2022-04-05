import * as React from 'react'

import { AlertProps } from '@quick-change/core'

import { Alert } from 'react-bootstrap'

export function AlertAdapter({ title, type, icon, onClose, children }: AlertProps) {
  return <Alert variant={type}>{children}</Alert>
}