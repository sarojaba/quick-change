import * as React from 'react'

import { GridProps } from '@quick-change/core'

import { Grid } from 'grommet'

/**
 * @see https://design-system.hpe.design/components/grid
 */
export function GridAdapter({ responsive, gapless, children }: GridProps) {

  const count = React.Children.toArray(children).length

  return (
    <Grid
      columns={{
        count: count,
        size: 'auto',
      }}
      gap="small">
      {children}
    </Grid>
  )
}
