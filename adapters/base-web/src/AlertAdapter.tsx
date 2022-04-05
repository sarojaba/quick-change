import * as React from 'react'

import { AlertProps } from '@quick-change/core'

import { Notification, KIND } from 'baseui/notification'

/**
 * @see https://baseweb.design/components/notification
 */
export function AlertAdapter({ title, type, icon, onClose, children }: AlertProps) {
  return (
    <Notification
      kind={kindByType(type)}
      closeable={onClose}
      onClose={onClose}
      overrides={{
        Body: {style: {width: 'auto'}},
      }}>
      {() => title}
    </Notification>
  )
}

function kindByType(type: any) {
  switch (type) {
    case 'info':
      return KIND.info
    case 'success':
      return KIND.positive
    case 'warning':
      return KIND.warning
    case 'danger':
      return KIND.negative
    default:
      return undefined
  }
}