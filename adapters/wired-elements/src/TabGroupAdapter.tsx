import * as React from 'react'

import { TabGroupProps } from '@quick-change/core'

import { WiredTabs } from 'react-wired-elements'

export function TabGroupAdapter({ active, onChange, children }: TabGroupProps) {
  return (
    <WiredTabs>{children}</WiredTabs>
  )
}