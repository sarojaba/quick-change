import * as React from 'react'

import { ButtonProps, ButtonGroupProps } from '@quick-change/core'

import { Button } from 'ui-neumorphism'

export function ButtonAdapter({ icon, type, shape, size, disabled, block, onClick, children }: ButtonProps) {
  return (
    <Button
      {...propByTypeAndShape(type, shape)}
      disabled={disabled}
      block={block}
      onClick={onClick}>
      {children}
    </Button>
  )
}

function propByTypeAndShape(type, shape) {
  switch (shape) {
    case 'outline':
      return { outline: true }
    default:
      break
  }
  switch (type) {
    case 'primary':
      return { color: 'var(--primary)' }
    case 'text':
      return { text: true }
    default:
      return {}
  }
}