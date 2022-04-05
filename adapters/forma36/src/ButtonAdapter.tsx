import * as React from 'react'

import { ButtonProps } from '@quick-change/core'

import { Button } from '@contentful/f36-components'

import { variantByType } from './utils/type'

/**
 * @see https://f36.contentful.com/components/button
 */
export function ButtonAdapter({ icon, type, shape, size, disabled, block, onClick, children }: ButtonProps) {
  return (
    <Button
      variant={variantByType(type)}
      size={size}
      isDisabled={disabled}
      isFullWidth={block}
      onClick={onClick}
    >
      {children}
    </Button>
  )
}
