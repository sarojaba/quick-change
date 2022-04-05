import * as React from 'react'

import { ButtonProps } from '@quick-change/core'

import { Button } from '@sproutsocial/racine'

/**
 * @see https://seeds.sproutsocial.com/components/button
 */
export function ButtonAdapter({ icon, type, shape, size, disabled, block, onClick, children }: ButtonProps) {
  return (
    <Button
      appearance={appearanceByType(type)}
      size={sizeBySize(size)}
      disabled={disabled}
      onClick={onClick}
      width={block ? 1 : undefined}
    >
      {children}
    </Button>
  )
}

function appearanceByType(type) {
  switch (type) {
    case 'primary':
    case 'secondary':
      return type
    case 'danger':
      return 'destructive'
    default:
      return undefined
  }
}

function sizeBySize(size) {
  switch (size) {
    case 'small':
    case 'medium':
      return 'default'
    case 'large':
      return size
    default:
      return undefined
  }
}