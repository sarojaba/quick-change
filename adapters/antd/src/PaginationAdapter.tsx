import * as React from 'react'

import { PaginationProps } from '@quick-change/core'

import { Pagination } from 'antd'

/**
 * @see https://ant.design/components/pagination/
 */
export function PaginationAdapter({ current, total, onChange }: PaginationProps) {
  return (
    <Pagination current={current} total={total} />
  )
}