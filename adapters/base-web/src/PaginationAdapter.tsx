import * as React from 'react'

import { PaginationProps } from '@quick-change/core'

import { Pagination } from 'baseui/pagination'

/**
 * @see https://baseweb.design/components/pagination/
 */
export function PaginationAdapter({ current, total, onChange }: PaginationProps) {
  return (
    <Pagination
      numPages={total}
      currentPage={current}
      onPageChange={onChange}
    />
  );  
}