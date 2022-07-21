import * as React from 'react'

import { ButtonProps } from '@quick-change/core'

import { Button } from 'rbx'

export function ButtonAdapter({ icon, type, shape, size, disabled, block, onClick, children }: ButtonProps) {
  return (
    <Button color={type} size={size} onClick={onClick}>
      {children}
    </Button>
  )
}
