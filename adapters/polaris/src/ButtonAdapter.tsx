import * as React from 'react'

import { ButtonProps } from '@quick-change/core'

import { Button } from '@shopify/polaris'

/**
 * @see 
 */
export function ButtonAdapter({ icon, type, shape, size, disabled, block, onClick, children }: ButtonProps) {
  return (
    <Button
      primary={type === 'primary'}
      size={sizeBySize(size)}
      disabled={disabled}
      fullWidth={block}
      onClick={onClick}>
      {children}
    </Button>
  )
}

function sizeBySize(size) {
  switch (size) {
    case 'small':
      return 'slim'
    case 'medium':
    case 'large':
      return size
    default:
      return undefined
  }
}