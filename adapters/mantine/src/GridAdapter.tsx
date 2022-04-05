import * as React from 'react'

import { GridProps } from '@quick-change/core'

import { Grid } from '@mantine/core'

export function GridAdapter({ responsive, gapless, children }: GridProps) {
  return (
    <Grid>{children}</Grid>
  )
}
