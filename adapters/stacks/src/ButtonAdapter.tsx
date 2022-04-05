import * as React from 'react'

import { ButtonProps } from '@quick-change/core'

/**
 * @see https://stackoverflow.design/product/components/buttons/
 * @param {*} param0 
 * @returns 
 */
export function ButtonAdapter({ icon, type, shape, size, disabled, block, onClick, children }: ButtonProps) {
  return (
    <button type="button"
      className={`s-btn ${classNameByType(type, shape)} ${classNameByShape(shape)} ${classNameBySize(size)}`}
      disabled={disabled}
      onClick={onClick}>
      {children}
    </button>
  )
}

function classNameByType(type, shape) {
  switch (type) {
    case 'primary':
      if (shape === 'outline' || shape === 'clear') {
        return ''
      }
      return 's-btn__primary'
    case 'secondary':
      return 's-btn__muted'
    case 'danger':
      return 's-btn__danger'
    default:
      return ''
  }
}

function classNameByShape(shape) {
  switch (shape) {
    case 'fill':
      return 's-btn__filled'
    case 'outline':
      return 's-btn__outlined'
    case 'clear':
    default:
      return ''
  }
}

function classNameBySize(size) {
  switch (size) {
    case 'small':
      return 's-btn__xs'
    case 'large':
      return 's-btn__md'
    default:
      return ''
  }
}
