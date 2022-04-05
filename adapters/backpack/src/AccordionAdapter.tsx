import * as React from 'react'

import { AccordionProps } from '@quick-change/core'

import { BpkAccordion, withSingleItemAccordionState } from 'bpk-component-accordion'

export function AccordionAdapter({ multiple, children }: AccordionProps) {
  const SingleItemAccordion = withSingleItemAccordionState(BpkAccordion)

  return (
    <SingleItemAccordion>{children}</SingleItemAccordion>
  )
}