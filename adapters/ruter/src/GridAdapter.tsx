import * as React from 'react'

import { GridProps } from '@quick-change/core'

import { Row } from '@ruter-ds/rds-components'

/**
 * @see https://components.ruter.as/#/Components/Grid/Row
 */
export function GridAdapter({ responsive, gapless, children }: GridProps) {
  return (
    <Row>{children}</Row>
  )
}
