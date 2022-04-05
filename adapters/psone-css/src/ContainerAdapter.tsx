import * as React from 'react'

import { ContainerProps } from '@quick-change/core'

/**
 * @see 
 */
export function ContainerAdapter({ breakpoint, align, children }: ContainerProps) {
  return (
    <div className="container">
      {children}
    </div>
  )
}