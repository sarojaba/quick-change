import * as React from 'react'

import { AccordionItemProps } from '@quick-change/core'

import { EuiAccordion, useGeneratedHtmlId } from '@elastic/eui'

/**
 * @see https://elastic.github.io/eui/#/layout/accordion
 */
export function AccordionItemAdapter({ title, children }: AccordionItemProps) {
  const simpleAccordionId = useGeneratedHtmlId({ prefix: 'simpleAccordion' });

  return (
    <EuiAccordion
      id={simpleAccordionId}
      buttonContent={title}
      paddingSize="l"
    >
      {children}
    </EuiAccordion>
  )
}