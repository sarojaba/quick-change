import * as React from 'react'

import { TabGroupProps } from '@quick-change/core'

import { Tabs } from '@class101/ui'

/**
 * @see https://ui.class101.dev/components/tabs
 */
export function TabGroupAdapter({ active, onChange, children }: TabGroupProps) {
  return (
    <Tabs value={active} onChange={onChange}>
      {children}
    </Tabs>
  )
}