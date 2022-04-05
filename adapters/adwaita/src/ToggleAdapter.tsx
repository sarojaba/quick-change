import * as React from 'react'

import { ToggleProps } from '@quick-change/core'

import { Switch } from 'web-toolkit'

/**
 * @see https://romgrk.github.io/web-toolkit/docs/component/switch
 */
export function ToggleAdapter({ checked, disabled }: ToggleProps) {
  return (
    <Switch disbled={disabled} />
  )
}