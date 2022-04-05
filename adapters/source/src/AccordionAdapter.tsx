import * as React from 'react'

import { AccordionProps } from '@quick-change/core'

import { Accordion } from '@guardian/source-react-components'

export function AccordionAdapter({ multiple, children }: AccordionProps) {
  return (
    <Accordion>{children}</Accordion>
  )
}