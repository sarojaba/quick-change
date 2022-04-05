import * as React from 'react'

import { ButtonProps } from '@quick-change/core'

import { Button } from 'doodlin-design-system'

/**
 * @see https://design.doodlin.co.kr/?path=/story/component-button--default
 */
export function ButtonAdapter({ icon, type, shape, size, disabled, block, onClick, children }: ButtonProps) {
  return (
    <Button
      label={{ labelText: children }}
      size={sizeBySize(size)}
      buttonColor={buttonColorByType(type)}
      fullWidth={block}
      disabled={disabled}
    />
  )
}

function buttonColorByType(type) {
  switch (type) {
    case 'secondary':
      return 'gray'
    case 'info':
      return 'blue'
    case 'danger':
      return 'red'
    default:
      return undefined
  }
}

function sizeBySize(size) {
  switch (size) {
    case 'small':
      return 'sm'
    case 'medium':
      return 'md'
    case 'large':
      return 'lg'
    default:
      return undefined
  }
}
