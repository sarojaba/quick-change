import * as React from 'react'

import { GridProps } from '@quick-change/core'

import { Box } from 'gestalt'

/**
 * @see https://gestalt.pinterest.systems/column
 */
export function GridAdapter({ responsive, gapless, children }: GridProps) {
  return (
    <Box display="flex" direction="row">
      {children}
    </Box>
  )
}
