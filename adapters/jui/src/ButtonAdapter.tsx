import * as React from 'react'

import { ButtonProps, ButtonGroupProps } from '@quick-change/core'

/**
 * @see http://uiplay.jui.io/?p=buttons
 * @param {*} param0 
 * @returns 
 */
export function ButtonAdapter({ icon, type, shape, size, disabled, block, onClick, children }: ButtonProps) {
  return (
    <a className={`btn ${propBySize(size)}`}
      disabled={disabled}
      onClick={onClick}>
      {children}
    </a>
  )
}

function propBySize(size) {
  const props = {}
  switch (size) {
    case 'small':
    case 'large':
      return size
    default:
      return 'normal'
  }
}
