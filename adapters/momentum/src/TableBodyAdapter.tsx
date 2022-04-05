import * as React from 'react'

import { TableBodyProps } from '@quick-change/core'

/**
 * @see https://momentum.design/components/data-table
 */
export function TableBodyAdapter({ children }: TableBodyProps) {
  return (
    <tbody className="md-data-table__tbody">
      {children}
    </tbody>
  )
}