import * as React from 'react'

import { SelectProps } from '@quick-change/core'

import { Select } from '@workday/canvas-kit-react'

/**
 * @see https://workday.github.io/canvas-kit/?path=/docs/preview-select-react-left-label--default
 */
export function SelectAdapter({ name, label, size, multiple, rows, disabled, value, onValueChange, children }: SelectProps) {
  return (
    <Select
      value={value}
      disabled={disabled}
      onChange={onValueChange}
    >
      {children}
    </Select>
  )
}