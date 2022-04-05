import * as React from 'react'

import { ButtonProps, ButtonGroupProps } from '@quick-change/core'

import { Button } from 'govuk-react'

/**
 * @see https://design-system.service.gov.uk/components/button/
 */
export function ButtonAdapter({ icon, type, shape, size, disabled, block, onClick, children }: ButtonProps) {
  return (
    <Button disabled={disabled}>{children}</Button>
  )
}
