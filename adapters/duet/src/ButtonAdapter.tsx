import * as React from 'react'

import { ButtonProps } from '@quick-change/core'

import { DuetButton as Button } from '@duetds/react'

/**
 * @see https://www.duetds.com/components/button/
 */
export function ButtonAdapter({ icon, type, shape, size, disabled, block, onClick, children }: ButtonProps) {
  return (
    <Button
      variation={variationByType(type)}
      size={sizeBySize(size)}
      disabled={disabled}
      expand={block}
      onClick={onClick}>
      {children}
    </Button>
  )
}

function variationByType(type) {
  switch (type) {
    case 'primary':
    case 'secondary':
      return type
    case 'danger':
      return 'destructive-primary'
    default:
      return undefined
  }
}

function sizeBySize(size) {
  switch (size) {
    case 'small':
    case 'medium':
      return size
    default:
      return undefined
  }
}