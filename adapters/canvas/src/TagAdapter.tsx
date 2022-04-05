import * as React from 'react'

import { TagProps } from '@quick-change/core'

import { StatusIndicator } from '@workday/canvas-kit-react'

/**
 * @see https://workday.github.io/canvas-kit/?path=/docs/components-indicators-status-indicator-react--basic
 */
export function TagAdapter({ type, onClick, onClose, children }: TagProps) {
  return (
    <StatusIndicator
      label={children}
      type={typeByType(type)}
    />
  )
}

function typeByType(type) {
  switch (type) {
    case 'info':
      return StatusIndicator.Type.Blue
    case 'success':
      return StatusIndicator.Type.Green
    case 'warning':
      return StatusIndicator.Type.Orange
    case 'danger':
      return StatusIndicator.Type.Red
    default:
      return StatusIndicator.Type.Gray
  }
}