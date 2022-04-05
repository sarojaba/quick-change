import * as React from 'react'

import { ButtonProps } from '@quick-change/core'

import { Button } from 'hds-react'

export function ButtonAdapter({ icon, type, shape, size, disabled, block, onClick, children }: ButtonProps) {
  return (
    <Button
      variant={variantByType(type)}
      fullWidth={block}
      size={sizeBySize(size)}
      onClick={onClick}
    >
      {children}
    </Button>
  )
}

function variantByType(type) {
  switch (type) {
    case 'primary':
    case 'secondary':
      return type
    default:
      return undefined
  }
}

function sizeBySize(size) {
  switch (size) {
    case 'small':
      return size
    case 'medium':
      return 'default'
    case 'large':
    default:
      // throw Error()
      return undefined
  }
}