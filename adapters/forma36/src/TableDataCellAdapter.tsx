import * as React from 'react'

import { TableDataCellProps } from '@quick-change/core'

import { Table } from '@contentful/f36-components'

/**
 * @see https://f36.contentful.com/components/table
 */
export function TableDataCellAdapter({ children }: TableDataCellProps) {
  return <Table.Cell>{children}</Table.Cell>
}