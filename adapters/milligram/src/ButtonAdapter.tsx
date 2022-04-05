import * as React from 'react'

import { ButtonProps, ButtonGroupProps } from '@quick-change/core'

export function ButtonAdapter({ icon, type, shape, size, disabled, block, onClick, children }: ButtonProps) {
  
  return (
    <button
      className={`button ${classNameByShape(shape)}`}
      disabled={disabled}
      onClick={onClick}>
      { children }
    </button>
  )
}

function classNameByShape(shape) {
  switch (shape) {
    case 'outline':
    case 'clear':
      return `button-${shape}`
    default:
      return ''
  }
}
