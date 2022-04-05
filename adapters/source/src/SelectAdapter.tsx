import * as React from 'react'

import { SelectProps } from '@quick-change/core'

import { Select } from '@guardian/source-react-components'

export function SelectAdapter({ name, label, size, multiple, rows, disabled, value, onValueChange, children }: SelectProps) {
  return (
    <Select label={label}>
      {children}
    </Select>
  )
}