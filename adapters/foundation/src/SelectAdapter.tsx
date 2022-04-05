import * as React from 'react'

import { SelectProps } from '@quick-change/core'

export function SelectAdapter({ name, label, size, multiple, rows, disabled, value, onValueChange, children }: SelectProps) {
  return (
    <label htmlFor={name}>
      {label}
      <select
        id={name} name={name}
        disabled={disabled}
      >
        {children}
      </select>
    </label>
  )
}