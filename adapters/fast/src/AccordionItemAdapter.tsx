import * as React from 'react'

import { AccordionItemProps } from '@quick-change/core'

import { FastAccordionItem } from './components'

export function AccordionItemAdapter({ title, children }: AccordionItemProps) {
  return (
    <FastAccordionItem slot="item">
      {children}
      <div slot="heading">{title}</div>
    </FastAccordionItem>
  )
}