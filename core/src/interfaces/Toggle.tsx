import * as React from 'react'

import { useComponents } from '../providers'

export interface ToggleProps {
  checked: boolean,
  disabled: boolean
}

export function Toggle({ checked, disabled }: ToggleProps) {
  const { ToggleAdapter } = useComponents()
  return (
    <ToggleAdapter
      checked={checked}
      disabled={disabled}
    />
  )
}
