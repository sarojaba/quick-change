import * as React from 'react'

import { AccordionItemProps } from '@quick-change/core'

import { Collapse, Text } from '@geist-ui/core'

export function AccordionItemAdapter({ title, children }: AccordionItemProps) {
  return (
    <Collapse title={title}>
      <Text>{children}</Text>
    </Collapse>
  )
}