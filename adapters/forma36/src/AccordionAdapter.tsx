import * as React from 'react'

import { AccordionProps } from '@quick-change/core'

import { Accordion } from '@contentful/f36-components'

/**
 * @see https://f36.contentful.com/components/accordion
 */
export function AccordionAdapter({ multiple, children }: AccordionProps) {
  return (
    <Accordion>
      {children}
    </Accordion>
  )
}