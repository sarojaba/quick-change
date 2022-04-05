import * as React from 'react'

import { AlertProps } from '@quick-change/core'

import { Alert } from 'web-toolkit'

/**
 * @see https://romgrk.github.io/web-toolkit/docs/component/alert
 */
export function AlertAdapter({ title, type, icon, onClose, children }: AlertProps) {
  return (
    <Alert
      title={title}
      showClose={onClose}
      onClose={onClose}
      info={type === 'info'}
      success={type === 'success'}
      warning={type === 'warning'}
      danger={type === 'danger'}
    />
  )
}
