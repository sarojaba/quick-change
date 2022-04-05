import * as React from 'react'

import { AccordionProps } from '@quick-change/core'

import { Accordion } from '@trussworks/react-uswds'

export function AccordionAdapter({ multiple, children }: AccordionProps) {
  const items = React.Children.map(children, child => {
    return {
      title: child.props.title,
      content: child.props.children,
      expanded: false,
      id: '123'
    }
  })
  return (
    <Accordion items={items} />
  )
}