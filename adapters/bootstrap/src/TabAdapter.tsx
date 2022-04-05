import * as React from 'react'

import { TabProps } from '@quick-change/core'

import { Tab } from 'react-bootstrap'

export function TabAdapter({ id, title, href, active, disabled, children }: TabProps) {
  return (
    <Tab activeKey={title} title={title}>{children}</Tab>
  )
}