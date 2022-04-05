import * as React from 'react'

import { TabProps } from '@quick-change/core'

import { Tab, Box } from 'grommet'

export function TabAdapter({ id, title, href, active, disabled, children }: TabProps) {
  return (
    <Tab title={title}>
      <Box margin="small">{children}</Box>
    </Tab>
  )
}