import * as React from 'react'

import { PaginationProps } from '@quick-change/core'

import { Pagination } from '@wonderflow/react-components'

/**
 * @see https://design.wonderflow.ai/components/navigation/pagination
 */
export function PaginationAdapter({ current, total, onChange }: PaginationProps) {
  const itemsPerPage = 10

  return (
    <Pagination
      itemsCount={total * itemsPerPage}
      itemsPerPage={itemsPerPage}
      initialPage={current}
      onPageClick={onChange}
      disableInitialCallback={true}
    />
  )
}
