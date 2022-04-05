import * as React from 'react'

import { ToggleProps } from '@quick-change/core'

import { EuiSwitch } from '@elastic/eui'

/**
 * @see https://elastic.github.io/eui/#/forms/selection-controls#switch
 */
export function ToggleAdapter({ checked, disabled }: ToggleProps) {
  return (
    <EuiSwitch
      label={undefined}
      checked={false}
      disabled={disabled}
      onChange={() => {}}
    />
  )
}