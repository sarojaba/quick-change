import * as React from 'react'

import { ButtonProps } from '@quick-change/core'

import { Button } from '@wonderflow/react-components'

/**
 * @see https://design.wonderflow.ai/components/actions/button
 */
export function ButtonAdapter({ icon, type, shape, size, disabled, block, onClick, children }: ButtonProps) {
  return (
    <Button
      kind={kindByType(type)}
      disabled={disabled}
      fullWidth={block}
      onClick={onClick}
    >
      {children}
    </Button>
  )
}

function kindByType(type) {
  switch (type) {
    case 'primary':
    case 'secondary':
      return type
    default:
      return undefined
  }
}