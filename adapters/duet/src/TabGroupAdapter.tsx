import * as React from 'react'

import { TabGroupProps } from '@quick-change/core'

import { DuetTabGroup as TabGroup } from '@duetds/react'

/**
 * @see https://www.duetds.com/components/tab-group/
 */
export function TabGroupAdapter({ active, onChange, children }: TabGroupProps) {
  return (
    <TabGroup
      variation="plain"
      onDuetTabChange={onChange}
    >
      {children}
    </TabGroup>
  )
}