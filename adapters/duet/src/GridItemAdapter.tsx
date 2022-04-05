import * as React from 'react'

import { GridItemProps } from '@quick-change/core'

import { DuetGridItem as GridItem } from '@duetds/react'

/**
 * @see https://www.duetds.com/components/grid/
 */
export function GridItemAdapter({ span, offset, children }: GridItemProps) {
  return (
    <GridItem>{children}</GridItem>
  )
}
