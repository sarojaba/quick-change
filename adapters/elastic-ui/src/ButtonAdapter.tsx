import * as React from 'react'

import { ButtonProps } from '@quick-change/core'

import { EuiButton } from '@elastic/eui'

/**
 * @see https://elastic.github.io/eui/#/navigation/button
 */
export function ButtonAdapter({ icon, type, shape, size, disabled, block, onClick, children }: ButtonProps) {
  return (
    <EuiButton
      color={colorByType(type)}
      size={sizeBySize(size)}
      isDisabled={disabled}
      fullWidth={block}
      onClick={onClick}
    >
      {children}
    </EuiButton>
  )
}

function colorByType(type) {
  switch (type) {
    case 'secondary':
      return 'text'
    case 'success':
    case 'warning':
    case 'danger':
      return type
    default:
      return undefined
  }
}

function sizeBySize(size) {
  switch (size) {
    case 'small':
      return 's'
    case 'medium':
      return 'm'
    default:
      return undefined
  }
}