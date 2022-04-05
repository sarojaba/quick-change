import * as React from 'react'

import { SelectProps } from '@quick-change/core'

export function SelectAdapter({ name, label, size, multiple, rows, disabled, value, onValueChange, children }: SelectProps) {

  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select id={name}>{children}</select>
    </div>
  )
}