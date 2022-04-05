import * as React from 'react'

import { AccordionItemProps } from '@quick-change/core'

import { AccordionRow } from '@guardian/source-react-components'

export function AccordionItemAdapter({ title, children }: AccordionItemProps) {
  return (
    <AccordionRow label={title}>
      {children}
    </AccordionRow>
  )
}