import * as React from 'react'

import { ButtonProps } from '@quick-change/core'

import { Button } from '@adobe/react-spectrum'

export function ButtonAdapter({ icon, type, shape, size, disabled, block, onClick, children }: ButtonProps) {
  return (
    <Button
      variant={variantByType(type)}
      size={size}
      isDisabled={disabled}
      onPress={onClick}>
      {children}
    </Button>
  )
}

function variantByType(type) {
  switch (type) {
    case 'primary':
      return 'primary'
    case 'secondary':
      return 'secondary'
    case 'danger':
      return 'negative'
    default:
      return 'cta'
  }
}
