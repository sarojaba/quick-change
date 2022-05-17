import * as React from 'react'

import { useComponents } from '../providers'

export interface GridItemProps {
  span?: number,
  offset?: number,
  children?: any
}

export function GridItem({ span, offset, children }: GridItemProps) {
  const { GridItemAdapter } = useComponents()
  return (
    <GridItemAdapter span={span} offset={offset}>{children}</GridItemAdapter>
  )
}
