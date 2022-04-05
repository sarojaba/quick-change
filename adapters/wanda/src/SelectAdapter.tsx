import * as React from 'react'

import { SelectProps } from '@quick-change/core'

import { Select } from '@wonderflow/react-components'

/**
 * @see https://design.wonderflow.ai/components/inputs/select
 */
export function SelectAdapter({ name, label, size, multiple, rows, disabled, value, onValueChange, children }: SelectProps) {
  return (
    <Select>
      {children}
    </Select>
  )
}