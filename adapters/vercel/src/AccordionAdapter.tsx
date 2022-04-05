import * as React from 'react'

import { AccordionProps } from '@quick-change/core'

import { Collapse } from '@geist-ui/core'

export function AccordionAdapter({ multiple, children }: AccordionProps) {
  return (
    <Collapse.Group>{children}</Collapse.Group>
  )
}
