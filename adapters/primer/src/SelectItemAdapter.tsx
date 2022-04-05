import * as React from 'react'

import { SelectItemProps } from '@quick-change/core'

import { Select } from '@primer/react'

export function SelectItemAdapter({ value, selected, children }: SelectItemProps) {
  return (
    <Select.Option value={value}>{children}</Select.Option>
  )
}