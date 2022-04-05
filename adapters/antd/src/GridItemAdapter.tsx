import * as React from 'react'

import { GridItemProps } from '@quick-change/core'

import { Col } from 'antd'

export function GridItemAdapter({ span, offset, children }: GridItemProps) {
  return (
    <Col span={span * 2}>{children}</Col>
  )
}