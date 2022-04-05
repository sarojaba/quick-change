import * as React from 'react'

import { RadioProps } from '@quick-change/core'

export function RadioAdapter({ name, value, label, checked, disabled, onChange }: RadioProps) {
  return (
    <label className="cybr-label">
      <input
        type="radio"
        className="cybr-radio"
        checked={checked}
        disabled={disabled}
      />
      {label}
    </label>
  )
}
