import * as React from 'react'

import { GridItemProps } from '@quick-change/core'

import { Box } from 'grommet'

/**
 * @todo size
 */
export function GridItemAdapter({ span, offset, children }: GridItemProps) {
  return <Box>{children}</Box>
}
