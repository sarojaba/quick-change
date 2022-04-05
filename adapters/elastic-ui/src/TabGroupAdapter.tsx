import * as React from 'react'

import { TabGroupProps } from '@quick-change/core'

import { EuiTabs } from '@elastic/eui'

/**
 * @see https://elastic.github.io/eui/#/navigation/tabs
 */
export function TabGroupAdapter({ active, onChange, children }: TabGroupProps) {
  const selected = React.Children.toArray(children).filter(child => child.props.title === active)[0].props.children

  return (
    <>
      <EuiTabs>{children}</EuiTabs>
      {selected}
    </>
  )
}