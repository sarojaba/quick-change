import * as React from 'react'

import { GridProps, calculateRemainEqualWidth } from '@quick-change/core'

import { Grid } from 'baseui/layout-grid'

export function GridAdapter({ responsive, gapless, children }: GridProps) {
  const width = calculateRemainEqualWidth(children)

  return (
    <Grid>{
      React.Children.map(children, child => {
        const { size } = child.props

        return size === undefined
          ? React.cloneElement(child, {size: width})
          : child
      })
    }</Grid>
  )
}
