import * as React from 'react'

import { SelectItemProps } from '@quick-change/core'

import { WiredItem } from 'react-wired-elements'

export function SelectItemAdapter({ value, selected, children }: SelectItemProps) {
  return (
    <WiredItem value={ value }>
      { children }
    </WiredItem>
  )
}