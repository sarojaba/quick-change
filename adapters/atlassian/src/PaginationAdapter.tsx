import * as React from 'react'

import { PaginationProps } from '@quick-change/core'

import Pagination from '@atlaskit/pagination'

/**
 * @see https://atlassian.design/components/pagination
 */
export function PaginationAdapter({ current, total, onChange }: PaginationProps) {
  const pages = Array.from({ length: total }, (v, i) => i + 1)

  return (
    <Pagination
      pages={pages}
      defaultSelectedIndex={current - 1}
    />
  )
}