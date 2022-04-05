import * as React from 'react'

import { ButtonProps } from '@quick-change/core'

export function ButtonAdapter({ icon, type, shape, size, disabled, block, onClick, children }: ButtonProps) {
  const isOutline = shape === 'outline' ? 'outline' : ''

  return (
    <button
      className={`${type} ${isOutline}`}
      disabled={disabled}
      onClick={onClick}>
      { children }
    </button>
  )
}