import * as React from 'react'

import { AccordionItemProps } from '@quick-change/core'

import { BpkAccordionItem } from 'bpk-component-accordion'

export function AccordionItemAdapter({ title, children }: AccordionItemProps) {
  return (
    <BpkAccordionItem title={title}>
      {children}
    </BpkAccordionItem>
  )
}