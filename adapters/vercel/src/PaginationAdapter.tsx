import * as React from 'react'

import { PaginationProps } from '@quick-change/core'

import { Pagination } from '@geist-ui/core'

/**
 * @see https://geist-ui.dev/en-us/components/pagination
 */
export function PaginationAdapter({ current, total, onChange }: PaginationProps) {
  return (
    <Pagination count={total} initialPage={current} />
  )
}
