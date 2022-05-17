import * as React from 'react'

import { useComponents } from '../providers'

export interface PaginationProps {
  current: number,
  total: number,
  onChange: any
}

export function Pagination({ current, total, onChange }: PaginationProps) {
  const { PaginationAdapter } = useComponents()
  return (
    <PaginationAdapter
      current={current}
      total={total}
      onChange={onChange}
    />
  )
}
