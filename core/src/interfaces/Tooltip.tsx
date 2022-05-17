import * as React from 'react'

import { useComponents } from '../providers'

export interface TooltipProps {
  text: string,
  // position: oneOf(['top', 'bottom', 'left', 'right']),
  position: string,
  children: any
}

export function Tooltip({ text, position, children }: TooltipProps) {
  const { TooltipAdapter } = useComponents()
  return (
    <TooltipAdapter text={text} position={position}>
      {children}
    </TooltipAdapter>
  )
}
