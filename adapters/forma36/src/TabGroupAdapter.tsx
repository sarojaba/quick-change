import * as React from 'react'

import { TabGroupProps } from '@quick-change/core'

import { Tabs } from '@contentful/f36-components'

/**
 * @see https://f36.contentful.com/components/tabs
 */
export function TabGroupAdapter({ active, onChange, children }: TabGroupProps) {

  const tabs = React.Children.map(children, (child, index) => {
    return (
      <Tabs.Tab panelId={index.toString()}>
        {child.props.title}
      </Tabs.Tab>
    )
  })

  const tabPanels = React.Children.map(children, (child, index) => {
    return (
      <Tabs.Panel id={index.toString()}>
        {child.props.children}
      </Tabs.Panel>
    )
  })

  return (
    <Tabs>
      <Tabs.List>{tabs}</Tabs.List>
      {tabPanels}
    </Tabs>
  )
}