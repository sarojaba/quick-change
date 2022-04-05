import * as React from 'react'

import { ButtonProps } from '@quick-change/core'

import { Button, KIND, SIZE } from 'baseui/button'

/**
 * @see https://baseweb.design/components/button
 */
export function ButtonAdapter({ icon, type, shape, size, disabled, block, onClick, children }: ButtonProps) {
  return (
    <Button
      kind={kindByType(type, shape)}
      size={sizeBySize(size)}
      disabled={disabled}
      onClick={onClick}>
      {children}
    </Button>
  )
}

function kindByType(type: any, shape: any) {
  if (shape === 'clear') {
    return KIND.minimal
  }

  switch (type) {
    case 'primary':
      return KIND.primary
    case 'secondary':
      return KIND.secondary
    default:
      return KIND.primary
  }
}

function sizeBySize(size: any) {
  switch (size) {
    case 'small':
      return SIZE.compact
    case 'large':
      return SIZE.large
    default:
      return SIZE.default
  }
}