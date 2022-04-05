import * as React from 'react'

import { ButtonProps } from '@quick-change/core'

import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
  DeleteButton
} from '@workday/canvas-kit-react'

/**
 * @see https://workday.github.io/canvas-kit/?path=/docs/components-buttons-button-react--primary
 */
export function ButtonAdapter({ icon, type, shape, size, disabled, block, onClick, children }: ButtonProps) {
  const Button = buttonByType(type)

  return (
    <Button>{children}</Button>
  )
}

function buttonByType(type) {
  switch (type) {
    case 'primary':
      return PrimaryButton
    case 'secondary':
      return SecondaryButton
    case 'tertiary':
      return TertiaryButton
    case 'danger':
      return DeleteButton
    default:
      return PrimaryButton
  }
}