import * as React from 'react'

import { AccordionItemProps } from '@quick-change/core'

import { Panel } from 'baseui/accordion'

export function AccordionItemAdapter({ title, children }: AccordionItemProps) {
  return (
    <Panel title={title}>{children}</Panel>
  )
}