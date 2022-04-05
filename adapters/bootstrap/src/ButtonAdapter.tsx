import * as React from 'react'

import { ButtonProps } from '@quick-change/core'

import { Button } from 'react-bootstrap'

export function ButtonAdapter({ icon, type, shape, size, disabled, block, onClick, children }: ButtonProps) {

  const inner = (
    <Button
      variant={classNameByTypeAndOutline(type, shape)}
      size={classNameBySize(size)}
      disabled={disabled}
      onClick={onClick} >
      {children}
    </Button>
  )

  return block
    ? <div className="d-grid gap-2">{inner}</div>
    : inner
}

function classNameByTypeAndOutline(type, shape) {
  const prefix = shape === 'outline' ? 'outline-' : ''
  return prefix + type
}

function classNameBySize(size) {
  switch (size) {
    case 'small':
      return 'sm'
    case 'large':
      return 'lg'
    default:
      return ''
  }
}