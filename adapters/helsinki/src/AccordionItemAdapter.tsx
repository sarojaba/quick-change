import * as React from 'react'

import { AccordionItemProps } from '@quick-change/core'

import { Accordion } from 'hds-react'

export function AccordionItemAdapter({ title, children }: AccordionItemProps) {
  return (
    <Accordion heading={title}>{children}</Accordion>
  )
}