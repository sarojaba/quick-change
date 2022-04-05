import * as React from 'react'

import { AccordionItemProps } from '@quick-change/core'

import { AccordionItem } from 'monday-ui-react-core'

/**
 * @see 
 */
export function AccordionItemAdapter({ title, children }: AccordionItemProps) {
  return (
    <AccordionItem title={title}>
      {children}
    </AccordionItem>
  )
}