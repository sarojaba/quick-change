import * as React from 'react'

import { ButtonProps } from '@quick-change/core'

import { WiredButton } from 'react-wired-elements'

export function ButtonAdapter({ icon, type, shape, size, disabled, block, onClick, children }: ButtonProps) {

  const style = {}

  const attr = shape === 'outline' ? 'color' : 'background'
  style[attr] = colorByType(type)

  return (
    <WiredButton
      disabled={disabled}
      onClick={onClick}
      style={style}>
      {children}
    </WiredButton>
  )
}

function colorByType(type) {
  switch (type) {
    case 'info':
      return 'blue'
    case 'success':
      return 'green'
    case 'warning':
      return 'yellow'
    case 'danger':
      return 'red'
    default:
      return undefined
  }
}