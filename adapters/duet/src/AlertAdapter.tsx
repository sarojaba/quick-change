import * as React from 'react'

import { AlertProps } from '@quick-change/core'

import { DuetAlert as Alert } from '@duetds/react'

import { variationByType } from './util'

/**
 * @see https://www.duetds.com/components/alert/
 */
export function AlertAdapter({ title, type, icon, onClose, children }: AlertProps) {
  return (
    <Alert
      variation={variationByType(type)}
      icon={icon ? 'messaging-alert' : undefined}
      dismissible={onClose}
    >
      {title}
    </Alert>
  )
}
