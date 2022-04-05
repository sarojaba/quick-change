import * as React from 'react'

import { ButtonProps } from '@quick-change/core'

export function ButtonAdapter({ icon, type, shape, size, disabled, block, onClick, children }: ButtonProps) {

  return (
    <button
      type="button"
      className={`btn ${classNameByType(type, shape)} ${classNameBySize(size)} ${block ? 'btn-block' : ''}`}
      disabled={disabled}
      onClick={onClick}>
      {children}
    </button>
  )
}

function classNameByType(type, shape) {
  const prefix = shape === 'outline' ? 'outline-' : ''

  switch (type) {
    case 'primary':
    case 'secondary':
    case 'success':
    case 'info':
    case 'warning':
    case 'danger':
      return `btn-${prefix}${type}`
    default:
      return ''
  }
}

function classNameBySize(size) {
  switch (size) {
    case 'small':
      return 'btn-sm'
    case 'large':
      return 'btn-lg'
    default:
      return ''
  }
}