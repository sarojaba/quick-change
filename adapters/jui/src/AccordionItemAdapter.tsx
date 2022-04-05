import React, { Fragment } from 'react'

import { AccordionItemProps } from '@quick-change/core'

export function AccordionItemAdapter({ title, children }: AccordionItemProps) {
  return <>
    <div className="title">{title}<i className="icon-arrow3" /></div>
    <div className="content">{children}</div>
  </>
}