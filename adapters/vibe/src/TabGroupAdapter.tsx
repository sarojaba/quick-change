import * as React from 'react'

import { TabGroupProps } from '@quick-change/core'

import { TabsContext, TabList, TabPanels, Tab, TabPanel } from 'monday-ui-react-core'

/**
 * @see https://style.monday.com/?path=/docs/navigation-tabs-tabs--overview
 */
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
    <TabsContext>
      <TabList>{tabs}</TabList>
      <TabPanels>{tabPanels}</TabPanels>
    </TabsContext>
  )
}