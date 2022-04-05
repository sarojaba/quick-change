import * as React from 'react'

import { TabProps } from '@quick-change/core'

import { Tabs } from 'antd'

export function TabAdapter({ id, title, href, active, disabled, children }: TabProps) {  
  return (
    <Tabs.TabPane tab={title} key={title} disabled={disabled}>
      {children}
    </Tabs.TabPane>
  )
}
