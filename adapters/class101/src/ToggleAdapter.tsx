import * as React from 'react'

import { ToggleProps } from '@quick-change/core'

import { Switch } from '@class101/ui'

/**
 * @see https://ui.class101.dev/form-inputs/switch
 */
export function ToggleAdapter({ checked, disabled }: ToggleProps) {
  return (
    <Switch
      checked={checked}
      disabled={disabled}
    />
  )
}