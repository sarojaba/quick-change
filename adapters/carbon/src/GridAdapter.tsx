import * as React from 'react'

import { GridProps } from '@quick-change/core'

import { Grid, Row } from 'carbon-components-react'

export function GridAdapter({ responsive, gapless, children }: GridProps) {
  return (
    <Grid>
      <Row>{children}</Row>
    </Grid>
  )
}