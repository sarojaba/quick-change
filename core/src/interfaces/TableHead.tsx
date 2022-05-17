import * as React from 'react'

import { useComponents } from '../providers'

export interface TableHeadProps {
  children: any
}

export function TableHead({ children }: TableHeadProps) {
  const { TableHeadAdapter } = useComponents()
  return (
    <TableHeadAdapter>
      {children}
    </TableHeadAdapter>
  )
}
