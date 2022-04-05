import * as React from 'react'

import { ButtonProps } from '@quick-change/core'

import { Button } from 'grommet'

/**
 * @see https://design-system.hpe.design/components/button
 */
export function ButtonAdapter({ icon, type, shape, size, disabled, block, onClick, children }: ButtonProps) {
  return (
    <Button
      label={children}
      size={size}
      primary={type === 'primary'}
      disabled={disabled}
      fill={block ? 'horizontal' : undefined}
      onClick={onClick}
    />
  )
}
