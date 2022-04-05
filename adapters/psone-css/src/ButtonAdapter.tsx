import * as React from 'react'

import { ButtonProps } from '@quick-change/core'

export function ButtonAdapter({ icon, type, shape, size, disabled, block, onClick, children }: ButtonProps) {
  return (
    <button
      type="button"
      className={`btn ${type}`}
      disabled={disabled}
      onClick={onClick}>
      {children}
    </button>
  )
}