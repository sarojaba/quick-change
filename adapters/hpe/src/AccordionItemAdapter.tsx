import * as React from 'react'

import { AccordionItemProps } from '@quick-change/core'

import { AccordionPanel, Box } from 'grommet'

export function AccordionItemAdapter({ title, children }: AccordionItemProps) {
  return (
    <AccordionPanel label={title}>
      <Box pad="small">{children}</Box>
    </AccordionPanel>
  )
}