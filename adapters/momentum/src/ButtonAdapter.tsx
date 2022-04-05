import * as React from 'react'

import { ButtonProps } from '@quick-change/core'

import { Button } from '@momentum-ui/react'

/**
 * @see https://momentum.design/components/button
 */
export function ButtonAdapter({ icon, type, shape, size, disabled, block, onClick, children }: ButtonProps) {
  return (
    <Button
      size={sizeBySize(size)}
      disabled={disabled}
      expand={block}
      onClick={onClick}
    >
      {children}
    </Button>
  )
}

function sizeBySize(size) {
  switch (size) {
    case 'small':
      return 28
    case 'medium':
      return 36
    case 'large':
      return 52
    default:
      return undefined
  }
}