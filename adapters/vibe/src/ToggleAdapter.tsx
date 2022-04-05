import * as React from 'react'

import { ToggleProps } from '@quick-change/core'

import { Toggle } from 'monday-ui-react-core'

/**
 * @see https://style.monday.com/?path=/docs/inputs-toggle--overview
 */
export function ToggleAdapter({ checked, disabled }: ToggleProps) {
  return <Toggle disabled={disabled} />
}