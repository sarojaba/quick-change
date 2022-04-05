import * as React from 'react'

import { ButtonProps } from '@quick-change/core'

import { Button } from 'carbon-components-react'

export function ButtonAdapter({ icon, type, shape, size, disabled, block, onClick, children }: ButtonProps) {
  const props = {}

  switch (type) {
    case 'secondary':
    case 'danger':
      props.kind = type
      break
    default:
      break
  }
  
  return (
    <Button {...props}>Button</Button>
  )
}
