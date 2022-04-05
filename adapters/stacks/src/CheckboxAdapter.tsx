import * as React from 'react'

import { CheckboxProps } from '@quick-change/core'

export function CheckboxAdapter({ label, checked, disabled, onChange }: CheckboxProps) {
  return (
    <input type="checkbox"
      checked={checked}
      disabled={disabled}
    />
  )
}
