import * as React from 'react'

import { SelectItemProps } from '@quick-change/core'

import { Select } from '@instructure/ui'

/**
 * @see https://instructure.design/#Select
 */
export function SelectItemAdapter({ value, selected, children }: SelectItemProps) {
  return (
    <Select.Option
      id={value}
      key={value}
      value={value}
    >
      {children}
    </Select.Option>
  )
}