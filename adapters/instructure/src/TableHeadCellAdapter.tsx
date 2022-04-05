import * as React from 'react'

import { TableHeadCellProps } from '@quick-change/core'

import { Table } from '@instructure/ui'

/**
 * @see https://instructure.design/#Table
 */
export function TableHeadCellAdapter({ children }: TableHeadCellProps) {
  return (
    <Table.ColHeader id="">
      {children}
    </Table.ColHeader>
  )
}
