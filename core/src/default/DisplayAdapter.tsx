import * as React from 'react'

import { DisplayProps } from '../interfaces'

/**
 * @see 
 */
export function DisplayAdapter({ size, children }: DisplayProps) {
  return (
    <div>{children}</div>
  )
}