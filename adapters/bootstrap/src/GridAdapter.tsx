import * as React from 'react'

import { GridProps } from '@quick-change/core'

import { Row } from 'react-bootstrap'

export function GridAdapter({ responsive, gapless, children }: GridProps) {
  return <Row>{children}</Row>
}