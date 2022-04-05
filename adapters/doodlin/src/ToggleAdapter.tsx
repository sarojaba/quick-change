import * as React from 'react'

import { ToggleProps } from '@quick-change/core'

import { Toggle } from 'doodlin-design-system'

/**
 * @see https://design.doodlin.co.kr/?path=/story/component-toggle--default
 */
export function ToggleAdapter({ checked, disabled }: ToggleProps) {
  return (
    <Toggle
      open={checked}
      disabled={disabled}
    />
  )
}