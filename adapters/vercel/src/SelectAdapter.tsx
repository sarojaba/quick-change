import * as React from 'react'

import { SelectProps } from '@quick-change/core'

import { Select } from '@geist-ui/core'

export function SelectAdapter({ name, label, size, multiple, rows, disabled, value, onValueChange, children }: SelectProps) {
  return (
    <Select multiple={multiple} onChange={onChange}>{children}</Select>
  )
}
