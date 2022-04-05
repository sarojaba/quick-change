import * as React from 'react'

import { ButtonProps } from '@quick-change/core'

import { Button } from '@chakra-ui/react'

export function ButtonAdapter({ icon, type, shape, size, disabled, block, onClick, children }: ButtonProps) {
  return (
    <Button
      colorScheme="blue"
      size={sizeBySize(size)}
      variant={variantByShape(shape)}>
      {children}
    </Button>
  )
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

function variantByShape(shape) {
  switch (shape) {
    case 'fill':
      return 'solid'
    case 'outline':
      return 'outline'
    case 'clear':
      return 'ghost'
    default:
      return undefined
  }
}