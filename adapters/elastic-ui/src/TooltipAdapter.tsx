import * as React from 'react'

import { TooltipProps } from '@quick-change/core'

import { EuiToolTip } from '@elastic/eui'

/**
 * @see https://elastic.github.io/eui/#/display/tooltip
 */
export function TooltipAdapter({ text, position, children }: TooltipProps) {
  return (
    <EuiToolTip
      content={text}
      position={position}
    >
      {children}
    </EuiToolTip>
  )
}