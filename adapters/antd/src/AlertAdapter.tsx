import * as React from 'react'

import { AlertProps } from '@quick-change/core'

import { Alert } from 'antd'

export function AlertAdapter({ title, type, icon, onClose, children }: AlertProps) {
  return (
    <Alert
      type={typeNameByType(type)}
      message={children}
      showIcon={showIconByTypeAndIcon(type, icon)}
      closable={onClose}
      onClose={onClose}
    />
  )
}

function typeNameByType(type) {
  switch (type) {
    case 'danger':
      return 'error'
    default:
      return type
  }
}

function showIconByTypeAndIcon(type, icon) {
  switch (type) {
    case 'primary':
    case 'secondary':
      return false
    case 'info':
    case 'success':
    case 'warning':
    case 'danger':
      return icon
    default:
      // throw Error(`Not supported icon with type: ${icon}, ${type}`)
      return false
  }
}