import * as React from 'react'

import { TooltipProps } from '@quick-change/core'

import Tooltip from '@atlaskit/tooltip'

export function TooltipAdapter({ text, position, children }: TooltipProps) {
  return (
    <Tooltip content={text}>
      {children}
    </Tooltip>
  )
}