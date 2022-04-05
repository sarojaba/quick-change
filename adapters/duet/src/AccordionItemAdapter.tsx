import * as React from 'react'

import { AccordionItemProps } from '@quick-change/core'

import { DuetCollapsible as Collapsible } from '@duetds/react'

/**
 * @see https://www.duetds.com/components/collapsible/
 */
export function AccordionItemAdapter({ title, children }: AccordionItemProps) {
  return (
    <Collapsible
      heading={title}
    >
      {children}
    </Collapsible>
  )
}