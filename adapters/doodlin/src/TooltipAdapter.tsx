import * as React from 'react'

import { TooltipProps } from '@quick-change/core'

import { Tooltip } from 'doodlin-design-system'

/**
 * @see https://design.doodlin.co.kr/?path=/story/component-tooltip--default
 */
export function TooltipAdapter({ text, position, children }: TooltipProps) {
  return (
    <Tooltip
      tooltipText={text}
      placement={placementByPosition(position)}
    >
      {children}
    </Tooltip>
  )
}

function placementByPosition(position) {
  switch (position) {
    case 'top':
      return '_top'
    case 'bottom':
      return '_bottom'
    case 'left':
      return '_left'
    case 'right':
      return '_right'
    default:
      return undefined
  }
}