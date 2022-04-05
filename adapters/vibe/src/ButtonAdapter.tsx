import * as React from 'react'

import { ButtonProps } from '@quick-change/core'

import { Button } from 'monday-ui-react-core'

/**
 * @see https://style.monday.com/?path=/docs/buttons-button--overview
 */
export function ButtonAdapter({ icon, type, shape, size, disabled, block, onClick, children }: ButtonProps) {
  return (
    <Button
      kind={kindByType(type)}
      size={sizeBySize(size)}
      color={colorByType(type)}
      disabled={disabled}
      onClick={onClick}>
      {children}
    </Button>
  )
}

function kindByType(type) {
  switch (type) {
    case 'primary':
      return undefined
    case 'secondary':
      return Button.kinds.SECONDARY
    default:
      return undefined
  }
}

function sizeBySize(size) {
  switch (size) {
    case 'small':
      return Button.sizes.SMALL
    case 'medium':
      return Button.sizes.MEDIUM
    case 'large':
      return Button.sizes.LARGE
    default:
      return undefined
  }
}

function colorByType(type) {
  switch (type) {
    case 'success':
      return Button.colors.POSITIVE
    case 'danger':
      return Button.colors.NEGATIVE
    default:
      return undefined
  }
}