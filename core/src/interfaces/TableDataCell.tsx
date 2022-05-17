import * as React from 'react'

import { useComponents } from '../providers'

export interface TableDataCellProps {
  children: any
}

export function TableDataCell({ children }: TableDataCellProps) {
  const { TableDataCellAdapter } = useComponents()
  return (
    <TableDataCellAdapter>
      {children}
    </TableDataCellAdapter>
  )
}
