import * as React from 'react'

import { useComponents } from '../providers'

export interface TableFootProps {
  children: any
}

export function TableFoot({ children }: TableFootProps) {
  const { TableFootAdapter } = useComponents()
  return (
    <TableFootAdapter>
      {children}
    </TableFootAdapter>
  )
}
