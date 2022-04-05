import * as React from 'react'

import { ButtonProps } from '@quick-change/core'

import { Button } from 'web-toolkit'

/**
 * @see https://romgrk.github.io/web-toolkit/docs/component/button
 */
export function ButtonAdapter({ icon, type, shape, size, disabled, block, onClick, children }: ButtonProps) {
  return (
    <Button
      primary={type === 'primary'}
      danger={type === 'danger'}
      size={size}
    >
      {children}
    </Button>
  )
}