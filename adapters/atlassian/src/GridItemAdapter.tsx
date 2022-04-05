import * as React from 'react'

import { GridItemProps } from '@quick-change/core'

import {  GridColumn } from '@atlaskit/page'

export function GridItemAdapter({ span, offset, children }: GridItemProps) {
  return (
    <GridColumn medium={span}>{children}</GridColumn>
  )
}
