import * as React from 'react'

import { TableDataCellProps } from '../interfaces'

/**
 * @see 
 */
export function TableDataCellAdapter({ children }: TableDataCellProps) {
  return <td>{children}</td>
}