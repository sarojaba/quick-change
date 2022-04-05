import * as React from 'react'

import { AccordionItemProps } from '@quick-change/core'

import { Disclosure } from '@wonderflow/react-components'

/**
 * @see https://design.wonderflow.ai/components/actions/disclosure
 */
export function AccordionItemAdapter({ title, children }: AccordionItemProps) {
  return (
    <Disclosure summary={title}>
      {children}
    </Disclosure>
  )
}