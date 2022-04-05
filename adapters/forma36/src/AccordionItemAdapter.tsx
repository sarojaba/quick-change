import * as React from 'react'

import { AccordionItemProps } from '@quick-change/core'

import { Accordion } from '@contentful/f36-components'

/**
 * @see https://f36.contentful.com/components/accordion
 */
export function AccordionItemAdapter({ title, children }: AccordionItemProps) {
  return (
    <Accordion.Item title={title}>
      {children}
    </Accordion.Item>
  )
}