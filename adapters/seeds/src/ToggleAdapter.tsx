import * as React from 'react'

import { ToggleProps } from '@quick-change/core'

import { Switch } from '@sproutsocial/racine'

/**
 * @see https://seeds.sproutsocial.com/components/switch
 */
export function ToggleAdapter({ checked, disabled }: ToggleProps) {
  return (
    <Switch
      disabled={disabled}
    />
  )
}