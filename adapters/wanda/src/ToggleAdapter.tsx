import * as React from 'react'

import { ToggleProps } from '@quick-change/core'

import { Toggle } from '@wonderflow/react-components'

/**
 * @see https://design.wonderflow.ai/components/inputs/selection-controls
 */
export function ToggleAdapter({ checked, disabled }: ToggleProps) {
  return (
    <Toggle
      disabled={disabled}
    />
  )
}