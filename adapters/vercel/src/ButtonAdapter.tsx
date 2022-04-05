import * as React from 'react'

import { ButtonProps } from '@quick-change/core'

import { Button } from '@geist-ui/core'

export function ButtonAdapter({ icon, type, shape, size, disabled, block, onClick, children }: ButtonProps) {
  return (
    <Button
      type={typeByType(type)}
      ghost={shape === 'outline'}
      scale={scaleBySize(size)}
      disabled={disabled}
      width={block ? '100%' : undefined}
      onClick={onClick}>
      {children}
    </Button>
  )
}

function typeByType(type) {
  switch (type) {
    case 'secondary':
    case 'success':
    case 'warning':
      return type
    case 'danger':
      return 'error'
    case 'text':
      return 'abort'
    default:
      return undefined
  }
}

function scaleBySize(size) {
  switch (size) {
    case 'small':
      return 0.5
    case 'large':
      return 1.5
    default:
      return undefined
  }
}
