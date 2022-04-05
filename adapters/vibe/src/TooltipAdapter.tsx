import * as React from 'react'

import { TooltipProps } from '@quick-change/core'

import { Tooltip } from 'monday-ui-react-core'

/**
 * @see https://style.monday.com/?path=/docs/popover-tooltip--overview
 */
export function TooltipAdapter({ text, position, children }: TooltipProps) {
  return (
    <Tooltip
      content={text}
      modifiers={[
        {
          name: 'preventOverflow',
          options: {
            mainAxis: false
          }
        },
        {
          name: 'flip',
          options: {
            fallbackPlacements: []
          }
        }
      ]}
      position={positionByPosition(position)}
    >
      {children}
    </Tooltip>
  )
}

function positionByPosition(position) {
  switch (position) {
    case 'top':
      return Tooltip.positions.TOP
    case 'bottom':
      return Tooltip.positions.BOTTOM
    case 'left':
      return Tooltip.positions.LEFT
    case 'right':
      return Tooltip.positions.RIGHT
    default:
      return undefined
  }
}