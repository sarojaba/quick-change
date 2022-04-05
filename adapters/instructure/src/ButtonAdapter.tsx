import * as React from 'react'

import { ButtonProps } from '@quick-change/core'

import { Button } from '@instructure/ui'

/**
 * @see https://instructure.design/#Button
 */
export function ButtonAdapter({ icon, type, shape, size, disabled, block, onClick, children }: ButtonProps) {
  return (
    <Button
      color={colorByType(type)}
      size={size}
      disabled={disabled}
      display={block ? 'block' : undefined}
      onClick={onClick}
    >
      {children}
    </Button>
  )
}

function colorByType(type) {
  switch (type) {
    case 'primary':
    case 'secondary':
    case 'success':
    case 'danger':
      return type
    default:
      return undefined
  }
}