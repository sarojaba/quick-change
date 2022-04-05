import * as React from 'react'

import { GridItemProps } from '@quick-change/core'

import { Grid } from '@trussworks/react-uswds'

export function GridItemAdapter({ span, offset, children }: GridItemProps) {
  return (
    <Grid col={span ? span : 'fill'}>
      {children}
    </Grid>
  )
}
