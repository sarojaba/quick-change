import * as React from 'react'

import { AccordionProps } from '@quick-change/core'

import { Accordion } from '@salesforce/design-system-react'

export function AccordionAdapter({ multiple, children }: AccordionProps) {
  return (
    <Accordion>{children}</Accordion>
  )
}
