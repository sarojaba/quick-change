import * as React from 'react'

import { AlertProps } from '@quick-change/core'

import { Toast, colors } from '@workday/canvas-kit-react'
import { exclamationCircleIcon } from '@workday/canvas-system-icons-web'

/**
 * @see Design https://design.workday.com/components/popups/toasts
 * @see Storybook https://workday.github.io/canvas-kit/?path=/docs/components-popups-toast-react--error
 */
export function AlertAdapter({ title, type, icon, onClose, children }: AlertProps) {
  return (
    <Toast
      icon={iconByType(type)}
      iconColor={iconColorByType(type)}
      onClose={onClose}
    >
      {title}
    </Toast>
  )
}

function iconByType(type) {
  switch (type) {
    case 'danger':
      return exclamationCircleIcon
    default:
      return undefined
  }
}

function iconColorByType(type) {
  switch (type) {
    case 'danger':
      return colors.cinnamon500
    default:
      return undefined
  }
}