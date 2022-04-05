import * as React from 'react'

import { TabGroupProps } from '@quick-change/core'

import { Tab } from '@wonderflow/react-components'

/**
 * @see https://design.wonderflow.ai/components/navigation/tab
 */
export function TabGroupAdapter({ active, onChange, children }: TabGroupProps) {
  return (
    <Tab>
      {children}
    </Tab>
  )
}