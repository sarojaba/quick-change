import * as React from 'react'

import { CardProps } from '@quick-change/core'

/**
 * @see 
 */
export function CardAdapter({ image, children }: CardProps) {
  return (
    <div className="card">
      <h4>zz</h4>
      {children}
    </div>
  )
}