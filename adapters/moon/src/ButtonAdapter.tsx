import * as React from 'react'

import { ButtonProps, ButtonGroupProps } from '@quick-change/core'

import { Button } from '@heathmont/moon-components'

export function ButtonAdapter({ icon, type, shape, size, disabled, block, onClick, children }: ButtonProps) {
  return (
    <Button
      variant={variantByType(type, shape)}
      size={size}
      iconLeft={icon}
      fullWidth={block}
      disabled={disabled}
      onClick={onClick}>
      {children}
    </Button>
  )
}

function variantByType(type, shape) {
  if (shape === 'clear') {
    return 'default'
  }

  switch (type) {
    case 'primary':
    case 'secondary':
      return type
    default:
      return undefined
  }
}
