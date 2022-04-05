import * as React from 'react'

import { GridItemProps } from '@quick-change/core'

export function GridItemAdapter({ span, offset, children }: GridItemProps) {
  return (
    <div>{ children }</div>
  )
}
