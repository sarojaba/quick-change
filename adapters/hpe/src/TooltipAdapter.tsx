import * as React from 'react'

import { TooltipProps } from '@quick-change/core'

import { Box, Tip, Text } from 'grommet'

export function TooltipAdapter({ text, position, children }: TooltipProps) {
  return (
    <Tip
      content={
        <Box width={{ max: 'small' }} round="xsmall">
          <Text>{text}</Text>
        </Box>
      }>
      {children}
    </Tip>
  )
}