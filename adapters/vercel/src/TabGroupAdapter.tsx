import * as React from 'react'

import { TabGroupProps } from '@quick-change/core'

import { Tabs } from '@geist-ui/core'

export function TabGroupAdapter({ active, onChange, children }: TabGroupProps) {
  return <Tabs initialValue={active}>{children}</Tabs>
}