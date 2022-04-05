import * as React from 'react'

import { SelectItemProps } from '@quick-change/core'

export function SelectItemAdapter({ value, selected, children }: SelectItemProps) {
  return (
    <option value={value}>{children}</option>
  )
}