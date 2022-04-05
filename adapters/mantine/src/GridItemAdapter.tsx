import * as React from 'react'

import { GridItemProps } from '@quick-change/core'

import { Grid } from '@mantine/core'

export function GridItemAdapter({ span, offset, children }: GridItemProps) {
  return (
    <Grid.Col span={span}>{children}</Grid.Col>
  )
}
