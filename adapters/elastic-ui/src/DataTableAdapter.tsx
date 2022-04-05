import * as React from 'react'

import { DataTableProps } from '@quick-change/core'

import { EuiBasicTable } from '@elastic/eui'

/**
 * @see https://elastic.github.io/eui/#/tabular-content/tables
 */
export function DataTableAdapter({ data, columns }: DataTableProps) {
  const newColumns = columns.map(c => {
    return {
      field: c.key,
      name: c.title
    }
  })
  return (
    <EuiBasicTable
      columns={newColumns}
      items={data}
    />
  )
}