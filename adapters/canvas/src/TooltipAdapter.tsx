import * as React from 'react'

import { TooltipProps } from '@quick-change/core'

import { Tooltip } from '@workday/canvas-kit-react'

/**
 * @see Design https://design.workday.com/components/popups/tooltips
 * @see Storybook https://workday.github.io/canvas-kit/?path=/docs/components-popups-tooltip-react--default-story
 */
export function TooltipAdapter({ text, position, children }: TooltipProps) {
  return (
    <Tooltip
      title={text}
      placement={placementByPosition(position)}
    >
      {children}
    </Tooltip>
  )
}

function placementByPosition(position) {
  switch (position) {
    case 'top':
    case 'bottom':
    case 'left':
    case 'right':
      return position
    default:
      return 'top'
  }
}