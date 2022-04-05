import * as React from 'react'

import { ButtonGroupProps } from '@quick-change/core'

import { Box } from 'grommet'

export function ButtonGroupAdapter({ vertical, children }: ButtonGroupProps) {
  return (
    <Box
      direction={vertical ? 'column' : 'row'}
      gap="small">
      {children}
    </Box>
  )
}