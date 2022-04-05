import * as React from 'react'

import { ButtonProps, ButtonGroupProps } from '@quick-change/core'

export function ButtonAdapter({ icon, type, shape, size, disabled, block, onClick, children }: ButtonProps) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}>
      { children }
    </button>
  )
}