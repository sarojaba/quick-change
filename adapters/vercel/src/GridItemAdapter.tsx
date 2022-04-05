import * as React from 'react'

import { GridItemProps } from '@quick-change/core'

import { Grid } from '@geist-ui/core'

export function GridItemAdapter({ span, offset, children }: GridItemProps) {
  return <Grid>{children}</Grid>
}
