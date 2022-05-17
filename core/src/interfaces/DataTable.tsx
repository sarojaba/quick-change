import * as React from 'react'

import { useComponents } from '../providers'

import { eliminateFragment } from '../util'

// Usage: Display table
{/* <DataTable data={data.data} /> */}

// Usage: Select columns
{/* <DataTable data={data.data}>
  <DataTable.Column>
    <DataTable.Head>author</DataTable.Head>
    <DataTable.Body>{ row => row['author'] }</DataTable.Body>
  </Table.Column>
</DataTable> */}

// Usage: Implicit column
{/* <DataTable data={data.data}>
  <DataTable.Column attr="author" />
</DataTable> */}

// Usage: Render cell
{/* <DataTable data={data.data}>
  <DataTable.Column head="Author" attr="author">{ attr =>
    <a href="/">{attr}</a>
  }</DataTable.Column>
</DataTable> */}

export interface DataTableProps {
  data: Array<any>,
  columns: Array<any>
}

export function DataTable({ data, columns }: DataTableProps) {
  const { DataTableAdapter } = useComponents()
  return (
    <DataTableAdapter data={data} columns={columns} />
  )
}
