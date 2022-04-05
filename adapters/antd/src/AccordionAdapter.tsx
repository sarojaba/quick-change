import * as React from 'react'

import { AccordionProps, eliminateFragment } from '@quick-change/core'

import { Collapse } from 'antd'

export function AccordionAdapter({ multiple, children }: AccordionProps) {
  const newChildren = eliminateFragment(children)

  return (
    <Collapse accordion
      onChange={key => console.log(key)}
    >
      {newChildren}
    </Collapse>
  )
}
