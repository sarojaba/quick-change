import * as React from 'react'

import { SelectProps } from '@quick-change/core'

import { Dropdown } from '@trussworks/react-uswds'

export function SelectAdapter({ name, label, size, multiple, rows, disabled, value, onValueChange, children }: SelectProps) {
  return (
    <Dropdown
      id={undefined}
      name={undefined}
      multiple={multiple}
      disabled={disabled}
    >
      {children}
    </Dropdown>
  )
}