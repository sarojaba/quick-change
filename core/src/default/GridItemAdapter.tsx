import * as React from 'react'

import { GridItemProps } from '../interfaces'

/**
 * @see 
 */
export function GridItemAdapter({ span, offset, children }: GridItemProps) {
  return (
    <div>{children}</div>
  )
}
