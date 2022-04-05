import * as React from 'react'

import { AccordionProps } from '@quick-change/core'

import { Accordion } from 'react-bootstrap'

export function AccordionAdapter({ multiple, children }: AccordionProps) {
  return (
    <Accordion>{children}</Accordion>
  )
}