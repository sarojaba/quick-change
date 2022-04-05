import * as React from 'react'

import { AccordionProps } from '@quick-change/core'

import { Accordion } from 'carbon-components-react'

export function AccordionAdapter({ multiple, children }: AccordionProps) {
  return <Accordion>{children}</Accordion>
}