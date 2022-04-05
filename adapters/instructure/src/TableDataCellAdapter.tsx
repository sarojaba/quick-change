import * as React from 'react'

import { TableDataCellProps } from '@quick-change/core'

import { Table } from '@instructure/ui'

/**
 * @see https://instructure.design/#Table
 */
export function TableDataCellAdapter({ children }: TableDataCellProps) {
  return (
    <Table.Cell>{children}</Table.Cell>
  )
}