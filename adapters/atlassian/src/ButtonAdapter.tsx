import * as React from 'react'

import { ButtonProps } from '@quick-change/core'

import Button from '@atlaskit/button'

export function ButtonAdapter({ icon, type, shape, size, disabled, block, onClick, children }: ButtonProps) {
  return (
    <Button
      iconBefore={icon}
      appearance={appearanceByTypeAndShape(type, shape)}
      spacing={spacingBySize(size)}
      isDisabled={disabled}
      shouldFitContainer={block}
      onClick={onClick}>
      {children}
    </Button>
  )
}

function appearanceByTypeAndShape(type, shape) {
  switch (shape) {
    case 'clear':
      return 'subtle'
    default:
      break
  }

  switch (type) {
    case 'primary':
    case 'warning':
    case 'danger':
      return type
    default:
      break
  }

  return undefined
}

function spacingBySize(size) {
  switch (size) {
    case 'small':
      return 'compact'
    default:
      return undefined
  }
}