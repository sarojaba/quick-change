import * as React from 'react'

import { SelectItemProps } from '@quick-change/core'

import { Option } from '@guardian/source-react-components'

export function SelectItemAdapter({ value, selected, children }: SelectItemProps) {
  return (
    <Option value={value} selected={selected}>
      {children}
    </Option>
  )
}