import * as React from 'react'

import { TabGroupProps } from '@quick-change/core'

import { Tabs } from '@sproutsocial/racine'

/**
 * @see https://seeds.sproutsocial.com/components/tabs
 */
export function TabGroupAdapter({ active, onChange, children }: TabGroupProps) {
  return (
    <Tabs
      selectedId={active}
    >
      {children}
    </Tabs>
  )
}