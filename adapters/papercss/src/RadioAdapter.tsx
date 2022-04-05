import * as React from 'react'

import { RadioProps } from '@quick-change/core'

export function RadioAdapter({ name, value, label, checked, disabled, onChange }: RadioProps) {
  return (
    <label htmlFor={name} className="paper-radio">
      <input type="radio" name={name} id={name} value={value} /> <span>{label}</span>
    </label>
  )
}
