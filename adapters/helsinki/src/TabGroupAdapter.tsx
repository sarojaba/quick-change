import * as React from 'react'

import { TabGroupProps } from '@quick-change/core'

import { Tabs } from 'hds-react'

export function TabGroupAdapter({ active, onChange, children }: TabGroupProps) {
  const tabs = React.Children.map(children, child => {
    return <Tabs.Tab>{child.props.title}</Tabs.Tab>
  })

  const tabPanels = React.Children.map(children, child => {
    return (
      <Tabs.TabPanel>{child.props.children}</Tabs.TabPanel>
    )
  })

  return (
    <Tabs>
      <Tabs.TabList>{tabs}</Tabs.TabList>
      {tabPanels}
    </Tabs>
  )
}