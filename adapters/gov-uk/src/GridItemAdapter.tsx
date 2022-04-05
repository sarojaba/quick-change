import * as React from 'react'

import { GridItemProps } from '@quick-change/core'

import { GridCol } from 'govuk-react'

export function GridItemAdapter({ span, offset, children }: GridItemProps) {
  return (
    <GridCol setWidth={widthBySize(span)}>
      {children}
    </GridCol>
  )
}

function widthBySize(span) {
  switch (span) {
    case 3:
      return 'one-quarter'
    case 4:
      return 'one-third'
    case 6:
      return 'one-half'
    case 8:
      return 'two-thirds'
    case 9:
      return 'two-quarters'
    case 12:
      return 'full'
    default:
      return undefined
  }
}