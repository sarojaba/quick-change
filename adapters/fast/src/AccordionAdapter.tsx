import * as React from 'react'

import { AccordionProps } from '@quick-change/core'

import { FastAccordion } from './components'

export function AccordionAdapter({ multiple, children }: AccordionProps) {
  return (
    <FastAccordion>{children}</FastAccordion>
  )
}