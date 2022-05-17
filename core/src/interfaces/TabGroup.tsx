import * as React from 'react'

import { useComponents } from '../providers'

export interface TabGroupProps {
  active?: string,
  onChange?: any,
  children: any
}

export function TabGroup({ active, onChange, children }: TabGroupProps) {

  const { TabGroupAdapter } = useComponents()

  return (
    <TabGroupAdapter
      active={active}
      onChange={onChange}
    >
      {children}
    </TabGroupAdapter>
  )
}
