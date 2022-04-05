import * as React from 'react'

import { TabGroupProps } from '@quick-change/core'

import { Tabs, space } from '@workday/canvas-kit-react'

/**
 * @see https://design.workday.com/components/navigation/tabs
 * @see https://workday.github.io/canvas-kit/?path=/docs/components-containers-tabs-react--basic
 */
export function TabGroupAdapter({ active, onChange, children }: TabGroupProps) {
  const tabs = React.Children.map(children, child => {
    return <Tabs.Item>{child.props.title}</Tabs.Item>
  })

  const tabPanels = React.Children.map(children, child => {
    return (
      <Tabs.Panel>{child.props.children}</Tabs.Panel>
    )
  })

  return (
    <Tabs>
      <Tabs.List>
        {tabs}
      </Tabs.List>
      <div style={{marginTop: space.m}}>
        {tabPanels}
      </div>
    </Tabs>
  )
}