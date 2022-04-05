import * as React from 'react'

import { SelectProps } from '@quick-change/core'

import { Select } from '@primer/react'

/**
 * @see https://primer.style/react/Select
 */
export function SelectAdapter({ name, label, size, multiple, rows, disabled, value, onValueChange, children }: SelectProps) {
  return (
    <Select>{children}</Select>
  )
}
