import * as React from 'react'

import { TooltipProps } from '@quick-change/core'

import { Tooltip } from '@instructure/ui'

/**
 * @see https://instructure.design/#Tooltip
 */
export function TooltipAdapter({ text, position, children }: TooltipProps) {
  return (
    <Tooltip
      renderTip={text}
      // placement={placementByPosition(position)}
    >
      {children}
    </Tooltip>
  )
}

function placementByPosition(position) {
  switch (position) {
    case 'bottom':
      return position
    case 'left':
      return 'start'
    case 'right':
      return 'end'
    default:
      return undefined
  }
}