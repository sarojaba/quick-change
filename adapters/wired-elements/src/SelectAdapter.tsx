import * as React from 'react'

import { SelectProps } from '@quick-change/core'

import { WiredCombo } from 'react-wired-elements'

export function SelectAdapter({ name, label, size, multiple, rows, disabled, value, onValueChange, children }: SelectProps) {
  return (
    <WiredCombo disabled={disabled}>{children}</WiredCombo>
  )
}