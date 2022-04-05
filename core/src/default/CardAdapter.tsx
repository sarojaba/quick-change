import * as React from 'react'

import { CardProps } from '../interfaces'

/**
 * @see 
 */
export function CardAdapter({ image, children }: CardProps) {
  return (
    <div>
      {children}
    </div>
  )
}