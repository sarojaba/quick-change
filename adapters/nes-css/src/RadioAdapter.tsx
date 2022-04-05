import * as React from 'react'

import { RadioProps } from '@quick-change/core'

export function RadioAdapter({ name, value, label, checked, disabled, onChange }: RadioProps) {
  return (
    <label>
      <input
        type="radio"
        className="nes-radio"
        name={name}
        checked={checked}
        disabled={disabled}
      />
      <span>{label}</span>
    </label>
  )
}
