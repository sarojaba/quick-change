import * as React from 'react'

import { EmptyProps } from '../interfaces'

/**
 * @see 
 */
export function EmptyAdapter({ children }: EmptyProps) {
  return (
    <div>{children}</div>
  )
}