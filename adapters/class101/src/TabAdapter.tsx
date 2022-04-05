import * as React from 'react'

import { TabProps } from '@quick-change/core'

import { Tabs } from '@class101/ui'

/**
 * @see https://ui.class101.dev/components/tabs
 */
export function TabAdapter({ id, title, href, active, disabled, children }: TabProps) {
  return (
    <Tabs.Item
      value={id}
      title={title}
      panel={children}
    />
  )
}
