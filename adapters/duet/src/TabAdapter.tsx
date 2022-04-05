import * as React from 'react'

import { TabProps } from '@quick-change/core'

import { DuetTab as Tab } from '@duetds/react'

/**
 * @see https://www.duetds.com/components/tab-group/
 */
export function TabAdapter({ id, title, href, active, disabled, children }: TabProps) {
  return (
    <Tab label={title}>
      {children}
    </Tab>
  )
}
