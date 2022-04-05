import * as React from 'react'

import { ToggleProps } from '@quick-change/core'

import { Checkbox } from '@instructure/ui'

/**
 * @see https://instructure.design/#Checkbox
 */
export function ToggleAdapter({ checked, disabled }: ToggleProps) {
  return (
    <Checkbox
      variant="toggle"
      label={undefined}
      disabled={disabled}
    />
  )
}