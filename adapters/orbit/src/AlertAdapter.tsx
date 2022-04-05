import * as React from 'react'

import { AlertProps } from '@quick-change/core'

import { Alert } from '@kiwicom/orbit-components'

/**
 * @see https://orbit.kiwi/components/information/alert/
 */
export function AlertAdapter({ title, type, icon, onClose, children }: AlertProps) {
  return (
    <Alert
      icon={icon}
      title={children}
      onClose={onClose}
    />
  )
}