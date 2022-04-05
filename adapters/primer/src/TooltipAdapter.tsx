import * as React from 'react'

import { TooltipProps } from '@quick-change/core'

import { Tooltip } from '@primer/react'

export function TooltipAdapter({ text, position, children }: TooltipProps) {
  return (
    <Tooltip aria-label={text}>{children}</Tooltip>
  )
}