import * as React from 'react'

import { TabProps } from '@quick-change/core'

import { TabItem } from 'doodlin-design-system'

/**
 * @see https://design.doodlin.co.kr/?path=/story/component-tab--default
 */
export function TabAdapter({ id, title, href, active, disabled, children }: TabProps) {
  return (
    <TabItem
      label={title}
      selected={active}
      disabled={disabled}
    />
  )
}
