import * as React from 'react'

import { TableHeadCellProps } from '@quick-change/core'

import { Table } from '@contentful/f36-components'

/**
 * @see https://f36.contentful.com/components/table
 */
export function TableHeadCellAdapter({ children }: TableHeadCellProps) {
  return <Table.Cell>{children}</Table.Cell>
}
