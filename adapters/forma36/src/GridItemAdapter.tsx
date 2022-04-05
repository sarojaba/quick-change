import * as React from 'react'

import { GridItemProps } from '@quick-change/core'

import { Grid } from '@contentful/f36-components'

/**
 * @see https://f36.contentful.com/components/grid
 */
export function GridItemAdapter({ span, offset, children }: GridItemProps) {
  return (
    <Grid.Item>
      {children}
    </Grid.Item>
  )
}
