import * as React from 'react'

import { TooltipProps } from '../interfaces'

/**
 * @see 
 */
export function TooltipAdapter({ text, position, children }: TooltipProps) {
  return <div>{children}</div>
}