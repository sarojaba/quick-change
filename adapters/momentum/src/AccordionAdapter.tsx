import * as React from 'react'

import { AccordionProps } from '@quick-change/core'

import {
  Accordion,
  AccordionContent,
  AccordionGroup,
  AccordionHeader
} from '@momentum-ui/react'

/**
 * @see https://momentum.design/components/accordion
 */
export function AccordionAdapter({ multiple, children }: AccordionProps) {

  // Workaround
  // Error Message: Accordion should contain one or more AccordionGroup as children.
  const newChildren = React.Children.map(children, child => {
    return (
      <AccordionGroup>
        <AccordionHeader>
          {child.props.title}
        </AccordionHeader>
        <AccordionContent>
          {child.props.children}
        </AccordionContent>
      </AccordionGroup>
    )
  })

  return (
    <Accordion
      multipleVisible={multiple}
    >
      {newChildren}
    </Accordion>
  )
}