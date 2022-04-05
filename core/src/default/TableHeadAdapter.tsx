import * as React from 'react'

import { TableHeadProps } from '../interfaces'

/**
 * @see 
 */
export function TableHeadAdapter({ children }: TableHeadProps) {
  return <thead>{children}</thead>
}
