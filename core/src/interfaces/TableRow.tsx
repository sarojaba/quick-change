import * as React from 'react'

import { useComponents } from '../providers'

export interface TableRowProps {
  children: any
}

export function TableRow({ children }: TableRowProps) {
  const { TableRowAdapter } = useComponents()
  return (
    <TableRowAdapter>
      {children}
    </TableRowAdapter>
  )
}
