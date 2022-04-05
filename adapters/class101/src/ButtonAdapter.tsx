import * as React from 'react'

import { ButtonProps } from '@quick-change/core'

import { Button, ButtonSize } from '@class101/ui'

/**
 * @see https://ui.class101.dev/components/button
 */
export function ButtonAdapter({ icon, type, shape, size, disabled, block, onClick, children }: ButtonProps) {
  return (
    <Button
      size={sizeBySize(size)}
      disabled={disabled}
      fill={block}
    >
      {children}
    </Button>
  )
}

function sizeBySize(size) {
  switch (size) {
    case 'small':
      return ButtonSize.SMALL
    case 'medium':
      return ButtonSize.MEDIUM
    case 'large':
      return ButtonSize.LARGE
    default:
      return undefined
  }
}