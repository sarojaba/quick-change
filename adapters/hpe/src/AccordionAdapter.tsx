import * as React from 'react'

import { AccordionProps } from '@quick-change/core'

import { Accordion } from 'grommet'

/**
 * @see https://design-system.hpe.design/components/accordion
 */
export function AccordionAdapter({ multiple, children }: AccordionProps) {
  return (
    <Accordion width="large">{children}</Accordion>
  )
}