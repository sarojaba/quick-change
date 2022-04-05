import * as React from 'react'

import { GridItemProps } from '@quick-change/core'

import { Col } from '@ruter-ds/rds-components'

/**
 * @see https://components.ruter.as/#/Components/Grid/Col
 */
export function GridItemAdapter({ span, offset, children }: GridItemProps) {
  return (
    <Col all={span}>
      {children}
    </Col>
  )
}
