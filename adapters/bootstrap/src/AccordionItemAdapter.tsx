import * as React from 'react'

import { AccordionItemProps } from '@quick-change/core'

import { Accordion } from 'react-bootstrap'

export function AccordionItemAdapter({ title, children }: AccordionItemProps) {
  return (
    <Accordion.Item>
      <Accordion.Header>{title}</Accordion.Header>
      <Accordion.Body>{children}</Accordion.Body>
    </Accordion.Item>
  )
}