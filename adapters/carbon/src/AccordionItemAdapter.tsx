import * as React from 'react'

import { AccordionItemProps } from '@quick-change/core'

import { AccordionItem } from 'carbon-components-react'

export function AccordionItemAdapter({ title, children }: AccordionItemProps) {
  return (
    <AccordionItem title={title}>
      <p>{children}</p>
    </AccordionItem>
  )
}