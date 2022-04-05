import * as React from 'react'

import { SelectProps } from '@quick-change/core'

import { Select } from '@instructure/ui'

/**
 * @see https://instructure.design/#Select
 */
export function SelectAdapter({ name, label, size, multiple, rows, disabled, value, onValueChange, children }: SelectProps) {
  return (
    <Select renderLabel={label}>
      {children}
    </Select>
  )
}