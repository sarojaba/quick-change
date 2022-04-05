import * as React from 'react'

import { AccordionProps } from '@quick-change/core'

/**
 * @see http://uiplay.jui.io/?p=accordion_1
 */
export function AccordionAdapter({ multiple, children }: AccordionProps) {
  return (
    <div className="accordion">{children}</div>
  )
}