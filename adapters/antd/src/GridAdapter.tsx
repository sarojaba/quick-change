import * as React from 'react'

import { GridProps, calculateRemainEqualWidth } from '@quick-change/core'

import { Row } from 'antd'

/**
 * @see https://ant.design/components/grid/
 */
export function GridAdapter({ responsive, gapless, children }: GridProps) {

  const width = calculateRemainEqualWidth(children)

  return (
    <Row>{
      React.Children.map(children, child => {
        const { size } = child.props

        return size === undefined
          ? React.cloneElement(child, {size: width})
          : child
      })
    }</Row>
  )
}
