import * as React from 'react'

import { ButtonProps } from '@quick-change/core'

import { Button } from '@trussworks/react-uswds'

export function ButtonAdapter({ icon, type, shape, size, disabled, block, onClick, children }: ButtonProps) {
  return (
    <Button
      type="button"
      secondary={type === 'secondary'}
      accentStyle={accentStyleByType(type)}
      size={sizeBySize(size)}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </Button>
  )
}

function accentStyleByType(type) {
  switch (type) {
    case 'success':
      return 'cool'
    case 'warning':
      return 'warm'
    default:
      return undefined
  }
}

function sizeBySize(size) {
  switch (size) {
    case 'small':
      return size
    case 'large':
      return 'big'
    default:
      return undefined
  }
}