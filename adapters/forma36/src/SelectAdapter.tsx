import * as React from 'react'

import { SelectProps } from '@quick-change/core'

import { Select } from '@contentful/f36-components'

/**
 * @see https://f36.contentful.com/components/select
 */
export function SelectAdapter({ name, label, size, multiple, rows, disabled, value, onValueChange, children }: SelectProps) {
  return (
    <Select
      name={name}
      isDisabled={disabled}
      onChange={onValueChange}
    >
      {children}
    </Select>
  )
}