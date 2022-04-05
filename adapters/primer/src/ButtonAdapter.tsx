import * as React from 'react'

import { ButtonProps } from '@quick-change/core'

import {
  Button,
  ButtonPrimary,
  ButtonOutline,
  ButtonDanger,
  ButtonInvisible
} from '@primer/react'

/**
 * @see https://primer.style/react/Buttons
 * @param {*} param0 
 * @returns 
 */
export function ButtonAdapter({ icon, type, shape, size, disabled, block, onClick, children }: ButtonProps) {
  const Btn = buttonByType(type, shape)
  return (
    <Btn variant={size} disabled={disabled} onClick={onClick}>{children}</Btn>
  )
}

function buttonByType(type, shape) {
  if (shape === 'clear') {
    return ButtonInvisible
  }
  switch (type) {
    case 'primary':
      return ButtonPrimary
    case 'info':
      return ButtonOutline
    case 'danger':
      return ButtonDanger
    default:
      return Button
  }
}
