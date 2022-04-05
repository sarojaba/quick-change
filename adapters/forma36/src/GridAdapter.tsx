import * as React from 'react'

import { GridProps } from '@quick-change/core'

import { Grid } from '@contentful/f36-components'

/**
 * @see https://f36.contentful.com/components/grid
 */
export function GridAdapter({ responsive, gapless, children }: GridProps) {

  const count = React.Children.toArray(children).length

  return (
    <Grid columns={`repeat(${count}, 1fr)`}>
      {children}
    </Grid>
  )
}
