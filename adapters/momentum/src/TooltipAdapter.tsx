import * as React from 'react'

import { TooltipProps } from '@quick-change/core'

import { Button, Tooltip } from '@momentum-ui/react'

/**
 * @see https://momentum.design/components/tooltip
 */
export function TooltipAdapter({ text, position, children }: TooltipProps) {
  return (
    <Tooltip tooltip={text}>
      {children}
    </Tooltip>
  )
}