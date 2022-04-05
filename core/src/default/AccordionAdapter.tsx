import * as React from 'react'

import { AccordionProps } from '../interfaces'

/**
 * @see 
 */
export function AccordionAdapter({ multiple, children }: AccordionProps) {
  return (
    <div>{children}</div>
  )
}