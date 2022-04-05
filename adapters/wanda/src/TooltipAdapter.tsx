import * as React from 'react'

import { TooltipProps } from '@quick-change/core'

import { Tooltip } from '@wonderflow/react-components'

/**
 * @see https://design.wonderflow.ai/components/dialogs/tooltip
 */
export function TooltipAdapter({ text, position, children }: TooltipProps) {
  return (
    <Tooltip trigger={<span tabIndex={0}>{text}</span>}>
      {children}
    </Tooltip>
  )
}