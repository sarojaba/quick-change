import * as React from 'react'

import { TabGroupProps } from '@quick-change/core'

import { Tabs, Tab, TabItems, TabItem } from 'ui-neumorphism'

export function TabGroupAdapter({ active, onChange, children }: TabGroupProps) {
  const tabs = React.Children.map(children, child => {
    return <Tab>{child.props.title}</Tab>
  })

  const tabItems = React.Children.map(children, child => {
    return <TabItem>{child.props.children}</TabItem>
  })

  return <>
    <Tabs>{tabs}</Tabs>
    <TabItems>{tabItems}</TabItems>
  </>
}