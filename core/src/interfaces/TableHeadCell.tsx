import * as React from 'react'

import { useComponents } from '../providers'

export interface TableHeadCellProps {
  children: any
}

export function TableHeadCell({ children }: TableHeadCellProps) {
  const { TableHeadCellAdapter } = useComponents()
  return (
    <TableHeadCellAdapter>
      {children}
    </TableHeadCellAdapter>
  )
}
