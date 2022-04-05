import * as React from 'react'

import { TooltipProps } from '@quick-change/core'

import { Tooltip } from '@trussworks/react-uswds'

export function TooltipAdapter({ text, position, children }: TooltipProps) {
  return (
    <Tooltip label={text} position={position}>
      {children}
    </Tooltip>
  )
}