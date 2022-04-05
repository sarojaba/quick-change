import * as React from 'react'

import { TabGroupProps } from '@quick-change/core'

import Tabs, { Tab, TabList, TabPanel } from '@atlaskit/tabs'

export function TabGroupAdapter({ active, onChange, children }: TabGroupProps) {
  const tabs = React.Children.map(children, child => {
    return <Tab>{child.props.title}</Tab>
  })

  const tabPanels = React.Children.map(children, child => {
    return (
      <TabPanel>{child.props.children}</TabPanel>
    )
  })

  return (
    <Tabs>
      <TabList>{tabs}</TabList>
      {tabPanels}
    </Tabs>
  )
}