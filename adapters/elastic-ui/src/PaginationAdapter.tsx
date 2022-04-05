import * as React from 'react'

import { PaginationProps } from '@quick-change/core'

import { EuiPagination } from '@elastic/eui'

/**
 * @see https://elastic.github.io/eui/#/navigation/pagination
 */
export function PaginationAdapter({ current, total, onChange }: PaginationProps) {
  return (
    <EuiPagination
      pageCount={total}
      activePage={current}
      onPageClick={onChange}
    />
  )
}