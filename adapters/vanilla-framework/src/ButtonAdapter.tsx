import * as React from 'react'

import { ButtonProps } from '@quick-change/core'

import { Button } from '@canonical/react-components'

export function ButtonAdapter({ icon, type, shape, size, disabled, block, onClick, children }: ButtonProps) {
  return (
    <Button appearance={appearanceByType(type)} disabled={disabled} onClick={onClick}>
      {children}
    </Button>
  )
}

function appearanceByType(type) {
  switch (type) {
    case 'success':
      return 'positive'
    default:
      return undefined
  }
}