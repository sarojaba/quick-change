import * as React from 'react'

import { DataTableProps } from '@quick-change/core'

import { Table } from 'antd'

export function DataTableAdapter({ data, columns }: DataTableProps) {
  const newColumns = columns.map(c => {
    return {
      key: c.key,
      dataIndex: c.key,
      title: c.title
    }
  })
  
  return (
    <Table dataSource={data} columns={newColumns} />
  )
}