import * as React from 'react'

import { AccordionItemProps } from '@quick-change/core'

import { Collapse } from 'antd'

export function AccordionItemAdapter({ title, children }: AccordionItemProps) {
  return (
    <Collapse.Panel
      header={title}
      key={title}
    >
      <p>{children}</p>
    </Collapse.Panel>
  )
}