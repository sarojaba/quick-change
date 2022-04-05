import * as React from 'react'

import { ButtonProps } from '@quick-change/core'

import { Button } from 'evergreen-ui'

/**
 * @see https://evergreen.segment.com/components/buttons
 */
export function ButtonAdapter({ icon, type, shape, size, disabled, block, onClick, children }: ButtonProps) {
  return (
    <Button
      appearance="primary"
      intent={intentByType(type)}
      size={size}
      disabled={disabled}
    >
      {children}
    </Button>
  )
}

function intentByType(type) {
  switch (type) {
    case 'success':
    case 'danger':
      return type
    default:
      return undefined
  }
}