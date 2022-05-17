import * as React from 'react'

import { useComponents } from '../providers'

export interface TableBodyProps {
  children: any
}

export function TableBody({ children }: TableBodyProps) {
  const { TableBodyAdapter } = useComponents()
  return (
    <TableBodyAdapter>
      {children}
    </TableBodyAdapter>
  )
}
