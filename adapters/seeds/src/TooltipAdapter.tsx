import * as React from 'react'

import { TooltipProps } from '@quick-change/core'

import { Tooltip } from '@sproutsocial/racine'

/**
 * @see https://seeds.sproutsocial.com/components/tooltip
 */
export function TooltipAdapter({ text, position, children }: TooltipProps) {
  return (
    <Tooltip content={text} placement={position}>
      {children}
    </Tooltip>
  )
}