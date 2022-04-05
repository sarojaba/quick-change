import * as React from 'react'

import { AccordionProps } from '@quick-change/core'

import { Accordion } from 'monday-ui-react-core'

/**
 * @see https://style.monday.com/?path=/docs/data-display-accordion--overview
 */
export function AccordionAdapter({ multiple, children }: AccordionProps) {
  return (
    <Accordion>
      {children}
    </Accordion>
  )
}