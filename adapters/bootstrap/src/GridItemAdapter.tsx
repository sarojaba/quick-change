import * as React from 'react'

import { GridItemProps } from '@quick-change/core'

import { Col } from 'react-bootstrap'

export function GridItemAdapter({ span, offset, children }: GridItemProps) {
  return <Col>{ children }</Col>
}