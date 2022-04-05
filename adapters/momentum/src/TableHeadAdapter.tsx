import * as React from 'react'

import { TableHeadProps } from '@quick-change/core'

/**
 * @see https://momentum.design/components/data-table
 */
export function TableHeadAdapter({ children }: TableHeadProps) {
  return (
    <thead className="md-data-table__thead">
      {children}
    </thead>
  )
}
