import * as React from 'react'

import { GridProps } from '@quick-change/core'

import { Grid } from '@atlaskit/page'

export function GridAdapter({ responsive, gapless, children }: GridProps) {
  // return (
  //   <Grid>{children}</Grid>
  // )

  let remainSectionCount = 12
  let noSizeItemCount = 0

  React.Children.forEach(children, child => {
    const { size } = child.props

    if (size === undefined) {
      noSizeItemCount++      
    } else {
      remainSectionCount -= size
    }
  })

  return (
    <Grid>{
      React.Children.map(children, child => {
        const { size } = child.props

        return size === undefined
          ? React.cloneElement(child, {size: remainSectionCount / noSizeItemCount})
          : child
      })
    }</Grid>
  )
}