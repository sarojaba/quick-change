import * as React from 'react'

import { TabGroupProps } from '@quick-change/core'

import { Tabs } from 'antd'

export function TabGroupAdapter({ active, onChange, children }: TabGroupProps) {
  return (
    <Tabs defaultActiveKey={active}>{children}</Tabs>
  )
}