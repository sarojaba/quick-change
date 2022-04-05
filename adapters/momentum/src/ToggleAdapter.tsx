import * as React from 'react'

import { ToggleProps } from '@quick-change/core'

import { ToggleSwitch } from '@momentum-ui/react'

/**
 * @see https://momentum.design/components/toggle-switch
 */
export function ToggleAdapter({ checked, disabled }: ToggleProps) {
  return (
    <ToggleSwitch
      disabled={disabled}
    />
  )
}