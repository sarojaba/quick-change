import * as React from 'react'

import { SelectProps } from '@quick-change/core'

import { Select } from '@sproutsocial/racine'

/**
 * @see https://seeds.sproutsocial.com/components/select
 */
export function SelectAdapter({ name, label, size, multiple, rows, disabled, value, onValueChange, children }: SelectProps) {
  return (
    <Select onChange={onValueChange}>
      {children}
    </Select>
  )
}