import * as React from 'react'

import { ButtonProps, ButtonGroupProps } from '@quick-change/core'

import { Button } from '@mantine/core'

export function ButtonAdapter({ icon, type, shape, size, disabled, block, onClick, children }: ButtonProps) {
  return (
    <Button variant={variantByShape(shape)}>
      {children}
    </Button>
  )
}

function variantByShape(shape) {
  switch (shape) {
    case 'outline':
      return 'outline'
    default:
      return undefined
  }
}
