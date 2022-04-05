import * as React from 'react'

import { TooltipProps } from '@quick-change/core'

import { Tooltip } from '@contentful/f36-components'

/**
 * @see https://f36.contentful.com/components/tooltip
 */
export function TooltipAdapter({ text, position, children }: TooltipProps) {
  return (
    <Tooltip placement={position} content={text}>
      {children}
    </Tooltip>
  )
}