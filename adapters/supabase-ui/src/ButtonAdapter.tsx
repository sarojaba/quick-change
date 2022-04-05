import * as React from 'react'

import { ButtonProps, ButtonGroupProps } from '@quick-change/core'

import { Button } from '@supabase/ui'

export function ButtonAdapter({ icon, type, shape, size, disabled, block, onClick, children }: ButtonProps) {
  return (
    <Button
      type={classNameByType(type, shape)}
      size={size}
      disabled={disabled}
      onClick={onClick}>
      {children}
    </Button>
  )
}

function classNameByType(type, shape) {
  if (shape === 'outline') {
    return 'outline'
  }
  
  switch (type) {
    case 'primary':
      return 'primary'
    default:
      return 'default'
  }
}
