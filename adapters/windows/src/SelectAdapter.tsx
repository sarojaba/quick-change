import * as React from 'react'

import { SelectProps, SelectItemProps } from '@quick-change/core'

export function SelectAdapter({ name, label, size, multiple, rows, disabled, value, onValueChange, children }: SelectProps) {
  return (
    <select>{children}</select>
  )
}

export function SelectItemAdapter({ value, selected, children }: SelectItemProps) {
  return (
    <option value={value}>{children}</option>
  )
}