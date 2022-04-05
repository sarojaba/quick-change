import * as React from 'react'

import { ButtonProps } from '@quick-change/core'

import { Button } from 'semantic-ui-react'

export function ButtonAdapter({ icon, type, shape, size, disabled, block, onClick, children }: ButtonProps) {
  const childProps = {}

  if (type === 'primary' || type === 'secondary') {
    childProps[type] = true
  }

  if (type === 'success') {
    childProps['positive'] = true
  }

  if (type === 'danger') {
    childProps['negative'] = true
  }

  if (shape === 'outline') {
    childProps['basic'] = true
  }

  return (
    <Button {...childProps}
      size={size}
      disabled={disabled}
      onClick={onClick}>
      {children}
    </Button>
  )
}