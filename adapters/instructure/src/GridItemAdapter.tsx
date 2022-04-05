import * as React from 'react'

import { GridItemProps } from '@quick-change/core'

import { Grid } from '@instructure/ui'

/**
 * @see https://instructure.design/#Grid
 */
export function GridItemAdapter({ span, offset, children }: GridItemProps) {
  return (
    <Grid.Col width={span}>
      {children}
    </Grid.Col>
  )
}
