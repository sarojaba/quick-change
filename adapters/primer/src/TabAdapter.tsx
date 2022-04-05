import * as React from 'react'

import { TabProps } from '@quick-change/core'

import { TabNav } from '@primer/react'

/**
 * @see https://primer.style/react/TabNav
 * @param {*} param0 
 * @returns 
 */
export function TabAdapter({ id, title, href, active, disabled, children }: TabProps) {
  return (
    <TabNav.Link href={href} selected={active}>{title}</TabNav.Link>
  )
}
