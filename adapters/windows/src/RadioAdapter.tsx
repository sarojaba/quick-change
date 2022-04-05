import * as React from 'react'

import { RadioProps, RadioGroupProps } from '@quick-change/core'

export function RadioAdapter({ name, value, label, checked, disabled, onChange }: RadioProps) {
  return (
    <div className="field-row">
      <input type="radio"
        id={name} name={name}
        checked={checked} disabled={disabled}
      />
      <label htmlFor={name}>{label}</label>
    </div>
  )
}

export function RadioGroupAdapter({ name, label, value, inline, disabled, onChange, children }: RadioGroupProps) {
  return children
}