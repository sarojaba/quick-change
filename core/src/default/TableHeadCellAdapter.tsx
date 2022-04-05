import * as React from 'react'

import { TableHeadCellProps } from '../interfaces'

/**
 * @see 
 */
export function TableHeadCellAdapter({ children }: TableHeadCellProps) {
  return <th>{children}</th>
}
