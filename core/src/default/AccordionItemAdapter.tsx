import * as React from 'react'

import { AccordionItemProps } from '../interfaces'

/**
 * @see 
 */
export function AccordionItemAdapter({ title, children }: AccordionItemProps) {
  return (
    <details>
      <summary>{title}</summary>
      {children}
    </details>
  )
}