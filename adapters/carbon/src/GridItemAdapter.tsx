import * as React from 'react'

import { GridItemProps } from '@quick-change/core'

import { Column } from 'carbon-components-react'

export function GridItemAdapter({ span, offset, children }: GridItemProps) {
  return (
    <Column sm={3} md={3} lg={3}>{children}</Column>
  )
}
