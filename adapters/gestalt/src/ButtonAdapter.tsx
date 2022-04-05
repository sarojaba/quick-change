import * as React from 'react'

import { ButtonProps } from '@quick-change/core'

import { Button } from 'gestalt'

export function ButtonAdapter({ icon, type, shape, size, disabled, block, onClick, children }: ButtonProps) {
  return (
    <Button
      text={children}
      color={colorByType(type)}
      size={sizeBySize(size)}
      disabled={disabled}
      fullWidth={block}
      onClick={onClick}
    />
  )
}

function colorByType(type) {
  switch (type) {
    case 'primary':
      return 'red'
    case 'secondary':
      return 'gray'
    default:
      return undefined
  }
}

function sizeBySize(size) {
  switch (size) {
    case 'small':
      return 'sm'
    case 'medium':
      return 'md'
    case 'large':
      return 'lg'
    default:
      return undefined
  }
}