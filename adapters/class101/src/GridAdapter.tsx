import * as React from 'react'

import { GridProps } from '@quick-change/core'

import { Row } from '@class101/ui'

/**
 * @see https://ui.class101.dev/components/layout
 */
export function GridAdapter({ responsive, gapless, children }: GridProps) {
  return (
    <Row>{children}</Row>
  )
}
