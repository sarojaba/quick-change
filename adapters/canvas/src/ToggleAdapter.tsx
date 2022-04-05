import * as React from 'react'

import { ToggleProps } from '@quick-change/core'

import { Switch } from '@workday/canvas-kit-react'

/**
 * @see https://workday.github.io/canvas-kit/?path=/docs/components-inputs-switch-react--basic
 */
export function ToggleAdapter({ checked, disabled }: ToggleProps) {
  return (
    <Switch disabled={disabled} />
  )
}