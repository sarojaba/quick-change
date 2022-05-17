import * as React from 'react'

import { useComponents, ScopeProvider } from '../providers'

export interface AccordionProps {
  multiple: boolean,
  children: any
}

export function Accordion({ multiple, children }: AccordionProps) {
  const { AccordionAdapter } = useComponents()
  return (
    <AccordionAdapter multiple={multiple}>
      <ScopeProvider scope="accordion">
        {children}
      </ScopeProvider>
    </AccordionAdapter>
  )
}

/**
 * Sub components
 */
import { AccordionItem } from './AccordionItem'

Accordion.Item = AccordionItem