import * as React from 'react'

import { TabGroupProps } from '@quick-change/core'

import { Tab } from 'doodlin-design-system'

/**
 * @see https://design.doodlin.co.kr/?path=/story/component-tab--default
 */
export function TabGroupAdapter({ active, onChange, children }: TabGroupProps) {
  return (
    <Tab>{children}</Tab>
  )
}