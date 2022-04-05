import * as React from 'react'

import { TabGroupProps } from '@quick-change/core'

import { Tabs } from '@instructure/ui'

/**
 * @see https://instructure.design/#Tabs
 */
export function TabGroupAdapter({ active, onChange, children }: TabGroupProps) {
  
  // Re-type
  // Warning: Failed prop type: Expected one of Panel,  in Tabs but found 'Tab'
  const newChildren = React.Children.map(children, child => {
    return (
      <Tabs.Panel
        id={child.props.title}
        renderTitle={child.props.title}
      >
        {child.props.children}
      </Tabs.Panel>
    )
  })
  return (
    <Tabs>{newChildren}</Tabs>
  )
}