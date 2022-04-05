import * as React from 'react'

import { ContainerProps } from '@quick-change/core'

import { Grid } from '@class101/ui'

/**
 * @see 
 */
export function ContainerAdapter({ breakpoint, align, children }: ContainerProps) {
  return (
    <Grid>{children}</Grid>
  )
}