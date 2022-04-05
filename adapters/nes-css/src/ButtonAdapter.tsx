import * as React from 'react'

import { ButtonProps } from '@quick-change/core'

export function ButtonAdapter({ icon, type, shape, size, disabled, block, onClick, children }: ButtonProps) {
  const isDisabled = disabled ? 'is-disabled' : ''

  return (
    <button
      type="button"
      className={`nes-btn is-${classNameByType(type)} ${isDisabled}`}
      disabled={disabled}
      onClick={onClick}>
      {children}
    </button>
  )
}

function classNameByType(type) {
  switch (type) {
    case 'danger':
      return 'error'
    default:
      return type
  }
}