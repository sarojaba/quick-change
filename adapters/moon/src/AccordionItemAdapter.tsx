import * as React from 'react'

import { AccordionItemProps } from '@quick-change/core'

import { Accordion } from '@heathmont/moon-accordion'

export function AccordionItemAdapter({ title, children }: AccordionItemProps) {
  return (
    <Accordion
      title={title}
      openByDefault={false}
      withArrow={true}
      disableOpen={false}>
      {children}
    </Accordion>
  )
}