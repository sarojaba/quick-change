import * as React from 'react'

import { GridItemProps } from '@quick-change/core'

import { Cell } from 'baseui/layout-grid'

export function GridItemAdapter({ span, offset, children }: GridItemProps) {
  return <Cell span={span} skip={offset}>{children}</Cell>
}
