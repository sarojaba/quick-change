import * as React from 'react'

import { ButtonProps } from '../interfaces'

/**
 * @see 
 */
export function ButtonAdapter({ icon, type, shape, size, disabled, block, onClick, children }: ButtonProps) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}>
      {children}
    </button>
  )
}