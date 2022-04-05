import * as React from 'react'

import { GridProps } from '@quick-change/core'

import { Grid } from '@geist-ui/core'

export function GridAdapter({ responsive, gapless, children }: GridProps) {
  return <Grid.Container>{children}</Grid.Container>
}
