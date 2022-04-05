import * as React from 'react'

import { AlertProps } from '@quick-change/core'

import { Alert } from 'ui-neumorphism'

import Icon from '@mdi/react'
import {
  mdiAlert,
  mdiCheckCircle,
  mdiInformationOutline,
  mdiInformationVariant
} from '@mdi/js'

export function AlertAdapter({ title, type, icon, onClose, children }: AlertProps) {
  return (
    <Alert
      type={typeByType(type)}
      // icon={icon ? <Icon path={iconByType(type)} size={1} /> : null}
      >
      {children}
    </Alert>
  )
}

function typeByType(type) {
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

function iconByType(type) {
  switch (type) {
    case 'info':
      return mdiInformationVariant
    case 'success':
      return mdiCheckCircle
    case 'warning':
      return mdiInformationOutline
    case 'danger':
      return mdiAlert
    default:
      return undefined
  }
}