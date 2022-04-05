import * as React from 'react'

import { DataTableProps } from '@quick-change/core'

import DynamicTable from '@atlaskit/dynamic-table'

export function DataTableAdapter({ data, columns }: DataTableProps) {
  const newColumns = columns.map(c => {
    return {
      key: c.key,
      content: c.title
    }
  })

  return (
    <DynamicTable head={{cells: newColumns}} rows={[]}/>
  )
}