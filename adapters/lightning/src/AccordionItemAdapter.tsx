import * as React from 'react'

import { AccordionItemProps } from '@quick-change/core'

import { AccordionPanel } from '@salesforce/design-system-react'

export function AccordionItemAdapter({ title, children }: AccordionItemProps) {
  return (
    <AccordionPanel
      summary={title}>
      {children}
    </AccordionPanel>
  )
}