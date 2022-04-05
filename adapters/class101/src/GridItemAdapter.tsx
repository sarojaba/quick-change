import * as React from 'react'

import { GridItemProps } from '@quick-change/core'

import { Col } from '@class101/ui'

/**
 * @see https://ui.class101.dev/components/layout
 */
export function GridItemAdapter({ span, offset, children }: GridItemProps) {
  return (
    <Col
      sm={span} md={span} lg={span}
      smOffset={offset} mdOffset={offset} lgOffset={offset}
    >
      {children}
    </Col>
  )
}
