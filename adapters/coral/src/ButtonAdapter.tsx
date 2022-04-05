import * as React from 'react'

import { ButtonProps } from '@quick-change/core'

import { Button } from '@talend/design-system'

/**
 * @see https://design.talend.com/?path=/docs/components-button--primary
 */
export function ButtonAdapter({ icon, type, shape, size, disabled, block, onClick, children }: ButtonProps) {
  return (
    <Button.Primary>{children}</Button.Primary>
  )
}