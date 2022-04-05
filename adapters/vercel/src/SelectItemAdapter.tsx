import * as React from 'react'

import { SelectItemProps } from '@quick-change/core'

import { Select } from '@geist-ui/core'

export function SelectItemAdapter({ value, selected, children }: SelectItemProps) {
  return (
    <Select.Option value={value}>{children}</Select.Option>
  )
}