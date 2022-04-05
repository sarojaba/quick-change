import * as React from 'react'

import { ButtonProps } from '@quick-change/core'

export function ButtonAdapter({ icon, type, shape, size, disabled, block, onClick, children }: ButtonProps) {
  return (
    <button
      className={`btn ${classNameByType(type)} ${shape === 'outline' ? 'btn-ghost' : ''} ${block ? 'btn-block' : ''}`}
      disabled={disabled}
      onClick={onClick}>
      { children }
    </button>
  )
}

function classNameByType(type) {
  switch (type) {
    case 'primary':
      return 'btn-primary'
    case 'danger':
      return 'btn-error'
    default:
      return 'btn-default'
  }
}