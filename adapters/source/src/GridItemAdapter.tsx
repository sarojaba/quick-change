import * as React from 'react'

import { GridItemProps } from '@quick-change/core'

import { Column } from '@guardian/source-react-components'

export function GridItemAdapter({ span, offset, children }: GridItemProps) {
  return (
    <Column width={widthBySize(span)}>
      {children}
    </Column>
  )
}

function widthBySize(span) {
  return span / 12
}
