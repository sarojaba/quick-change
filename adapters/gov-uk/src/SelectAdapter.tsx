import * as React from 'react'

import { SelectProps } from '@quick-change/core'

import { Select } from 'govuk-react'

export function SelectAdapter({ name, label, size, multiple, rows, disabled, value, onValueChange, children }: SelectProps) {
  return (
    <Select
      input={{
        name: name,
        onChange: onChange
      }}
      label={label}
    >{children}
    </Select>
  )
}
