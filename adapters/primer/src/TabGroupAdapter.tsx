import * as React from 'react'

import { TabGroupProps } from '@quick-change/core'

import { TabNav } from '@primer/react'

export function TabGroupAdapter({ active, onChange, children }: TabGroupProps) {
  return (
    <TabNav aria-label="Main">{children}</TabNav>
  )
}