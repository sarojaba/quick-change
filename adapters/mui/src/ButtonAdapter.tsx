import * as React from 'react'

import { ButtonProps } from '@quick-change/core'

import { Button } from '@mui/material'

export function ButtonAdapter({ icon, type, shape, size, disabled, block, onClick, children }: ButtonProps) {
  const variant = shape === 'outline' ? 'outlined' : 'contained'

  return (
    <Button
      variant={variant}
      color={type}
      size={size}
      disabled={disabled}
      onClick={onClick}>
      {children}
    </Button>
  )
}