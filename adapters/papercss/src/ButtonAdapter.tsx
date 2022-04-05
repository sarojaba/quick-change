import * as React from 'react'

import { ButtonProps } from '@quick-change/core'

export function ButtonAdapter({ icon, type, shape, size, disabled, block, onClick, children }: ButtonProps) {
  return (
    <button
      className={`${classNameByTypeAndOutline(type, shape)} btn-${size}`}
      disabled={disabled}
      onClick={onClick}>
      {children}
    </button>
  )
}

function classNameByTypeAndOutline(type, shape) {
  
  const suffixOutline = shape === 'outline' ? '-outline' : ''

  return `btn-${type}${suffixOutline}`
}