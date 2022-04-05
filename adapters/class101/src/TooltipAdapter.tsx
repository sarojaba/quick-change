import * as React from 'react'

import { TooltipProps } from '@quick-change/core'

import { Tooltip, Position } from '@class101/ui'

/**
 * @see https://ui.class101.dev/overlays/tooltip
 */
export function TooltipAdapter({ text, position, children }: TooltipProps) {
  return (
    <Tooltip
      content={text}
      position={positionByPosition(position)}
    >
      {children}
    </Tooltip>
  )
}

function positionByPosition(position) {
  switch (position) {
    case 'top':
      return Position.TOP
    case 'bottom':
      return Position.BOTTOM
    case 'left':
      return Position.LEFT
    case 'right':
      return Position.RIGHT
    default:
      return undefined
  }
}