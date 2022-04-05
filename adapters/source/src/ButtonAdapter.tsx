import * as React from 'react'

import { ButtonProps } from '@quick-change/core'

import { Button } from '@guardian/source-react-components'

export function ButtonAdapter({ icon, type, shape, size, disabled, block, onClick, children }: ButtonProps) {
  return (
    <Button
      priority={priorityByType(type)}
      size={sizeBySize(size)}
    >
      {children}
    </Button>
  )
}

function priorityByType(type) {
  switch (type) {
    case 'primary':
    case 'secondary':
      return type
    default:
      return undefined
  }
}

function sizeBySize(size) {
  switch (size) {
    case 'small':
      return size
    case 'medium':
      return 'default'
    default:
      return undefined
  }
}