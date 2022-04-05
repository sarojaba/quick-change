import * as React from 'react'

import { GridItemProps } from '@quick-change/core'
import { Column } from 'gestalt'

export function GridItemAdapter({ span, offset, children }: GridItemProps) {
  return (
    <Column span={span}>
      {children}
    </Column>
  )
}
