import * as React from 'react'

import { CardProps } from '@quick-change/core'

/**
 * @see https://terminalcss.xyz/#Cards
 */
export function CardAdapter({ image, children }: CardProps) {
  return (
    <div className="terminal-card">
      {/* <header>{title}</header> */}
      <div>{children}</div>
    </div>
  )
}