import * as React from 'react'

import { GridProps } from '@quick-change/core'

import { Grid } from '@instructure/ui'

/**
 * @see https://instructure.design/#Grid
 */
export function GridAdapter({ responsive, gapless, children }: GridProps) {
  return (
    <Grid>
      <Grid.Row>
        {children}
      </Grid.Row>
    </Grid>
  )
}
