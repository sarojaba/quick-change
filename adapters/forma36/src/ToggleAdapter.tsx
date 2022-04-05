import * as React from 'react'

import { ToggleProps } from '@quick-change/core'

import { Switch } from '@contentful/f36-components'

/**
 * @see https://f36.contentful.com/components/switch
 */
export function ToggleAdapter({ checked, disabled }: ToggleProps) {
  return (
    <Switch
      isDisabled={disabled}
    />
  )
}