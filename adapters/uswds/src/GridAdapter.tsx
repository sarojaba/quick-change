import * as React from 'react'

import { GridProps } from '@quick-change/core'

import { Grid } from '@trussworks/react-uswds'

export function GridAdapter({ responsive, gapless, children }: GridProps) {
  return (
    <Grid row>{children}</Grid>
  )
}
