import * as React from 'react'

import { AlertProps } from '@quick-change/core'

import { Note } from '@contentful/f36-components'

/**
 * @see https://f36.contentful.com/components/note
 */
export function AlertAdapter({ title, type, icon, onClose, children }: AlertProps) {
  return (
    <Note
      title={title}
      variant={variantByType(type)}
      withCloseButton={onClose}
      onClose={onClose}
    >
      {children}
    </Note>
  )
}

function variantByType(type) {
  switch (type) {
    case 'primary':
      return undefined
    case 'success':
      return 'positive'
    case 'warning':
      return type
    case 'danger':
      return 'negative'
    default:
      return undefined
  }
}