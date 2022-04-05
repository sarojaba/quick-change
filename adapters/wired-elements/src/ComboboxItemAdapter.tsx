import * as React from 'react'

import { ComboboxItemProps } from '@quick-change/core'

import { WiredItem } from 'react-wired-elements'

export function ComboboxItemAdapter({ children }: ComboboxItemProps) {  
  return (
    <WiredItem>{children}</WiredItem>
  )
}