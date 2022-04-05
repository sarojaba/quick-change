import * as React from 'react'

import { TooltipProps } from '@quick-change/core'

import { Tooltip } from 'gestalt'

export function TooltipAdapter({ text, position, children }: TooltipProps) {
  return (
    <Tooltip text={text}>
      {children}
    </Tooltip>
  )
}