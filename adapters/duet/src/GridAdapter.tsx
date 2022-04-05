import * as React from 'react'

import { GridProps } from '@quick-change/core'

import { DuetGrid as Grid } from '@duetds/react'

/**
 * @see https://www.duetds.com/components/grid/
 */
export function GridAdapter({ responsive, gapless, children }: GridProps) {
  return (
    <Grid responsive={responsive}>
      {children}
    </Grid>
  )
}
