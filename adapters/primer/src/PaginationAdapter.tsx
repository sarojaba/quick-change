import * as React from 'react'

import { PaginationProps } from '@quick-change/core'

import { Pagination } from '@primer/react'

/**
 * @see https://primer.style/react/Pagination
 */
export function PaginationAdapter({ current, total, onChange }: PaginationProps) {
  return (
    <Pagination
      pageCount={total}
      currentPage={current}
      onPageChange={onChange}
    />
  ) 
}