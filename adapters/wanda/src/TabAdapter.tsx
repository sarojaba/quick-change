import * as React from 'react'

import { TabProps } from '@quick-change/core'

import { Tab } from '@wonderflow/react-components'

/**
 * @see https://design.wonderflow.ai/components/navigation/tab
 */
export function TabAdapter({ id, title, href, active, disabled, children }: TabProps) {
  return (
    <Tab.Panel label={title}>
      {children}
    </Tab.Panel>
  )
}
