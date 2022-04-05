import * as React from 'react'

import { TabProps } from '@quick-change/core'

import { Tabs } from '@geist-ui/core'

export function TabAdapter({ id, title, href, active, disabled, children }: TabProps) {
  return (
    <Tabs.Item
      label={title}
      value={title}
      disabled={disabled}>
      {children}
    </Tabs.Item>
  )
}
