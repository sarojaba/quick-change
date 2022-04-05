import * as React from 'react'

import { AccordionProps } from '@quick-change/core'

import { Accordion } from 'baseui/accordion'

/**
 * @see https://baseweb.design/components/accordion
 */
export function AccordionAdapter({ multiple, children }: AccordionProps) {
  return (
    <Accordion>{children}</Accordion>
  )
}