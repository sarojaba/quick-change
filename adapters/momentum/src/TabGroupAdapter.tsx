import * as React from 'react'

import { TabGroupProps } from '@quick-change/core'

import {
  Tab,
  TabContent,
  TabList,
  TabPane,
  Tabs,
} from '@momentum-ui/react'

/**
 * @see https://momentum.design/components/tabs
 */
export function TabGroupAdapter({ active, onChange, children }: TabGroupProps) {

  const tabs = React.Children.map(children, child => {
    return <Tab heading={child.props.title} />
  })

  const tabPanes = React.Children.map(children, child => {
    return (
      <TabPane>{child.props.children}</TabPane>
    )
  })

  return (
    <Tabs tabType="tabs">
      <TabList>{tabs}</TabList>
      <TabContent>{tabPanes}</TabContent>
    </Tabs>
  )
}