import * as React from 'react'

import { SelectProps } from '@quick-change/core'

import { Select } from '@momentum-ui/react'

/**
 * @see https://momentum.design/components/select
 */
export function SelectAdapter({ name, label, size, multiple, rows, disabled, value, onValueChange, children }: SelectProps) {
  return (
    <Select>{children}</Select>
  )
}