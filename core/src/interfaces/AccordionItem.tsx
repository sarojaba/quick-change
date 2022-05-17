import * as React from 'react'

import { useComponents } from '../providers'

export interface AccordionItemProps {
  title: string,
  children: any
}

export function AccordionItem({ title, children }: AccordionItemProps) {
  const { AccordionItemAdapter } = useComponents()
  return (
    <AccordionItemAdapter title={title}>
      {children}
    </AccordionItemAdapter>
  )
}
