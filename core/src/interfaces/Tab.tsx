import * as React from 'react'

import { useComponents } from '../providers'

export interface TabProps {
  id: string,
  title: string,
  href: string,
  active: boolean,
  disabled: boolean,
  children: any
}

export function Tab({ id, title, href, active, disabled, children }: TabProps) {
  const { TabAdapter } = useComponents()

  return (
    <TabAdapter id={id} title={title} href={href} active={active} disabled={disabled}>
      {children}
    </TabAdapter>
  )
}

/**
 * Sub components
 */
import { TabGroup } from './TabGroup'

Tab.Group = TabGroup
