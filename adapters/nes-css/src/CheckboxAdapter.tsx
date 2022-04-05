import * as React from 'react'

import { CheckboxProps } from '@quick-change/core'

export function CheckboxAdapter({ label, checked, disabled, onChange }: CheckboxProps) {
  return (
    <label>
      <input
        type="checkbox"
        className="nes-checkbox"
        checked={checked}
        disabled={disabled}
      />
      <span>{ label }</span>
    </label>
  )
}
