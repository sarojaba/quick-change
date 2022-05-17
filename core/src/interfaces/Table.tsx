import * as React from 'react'

import { useComponents } from '../providers'

// import { eliminateFragment } from '../util'

// Usage: Display table
{/* <Table data={data.data} /> */}

// Usage: Select columns
{/* <Table data={data.data}>
  <Table.Column>
    <Table.Head>author</Table.Head>
    <Table.Body>{ row => row['author'] }</Table.Body>
  </Table.Column>
</Table> */}

// Usage: Implicit column
{/* <Table data={data.data}>
  <Table.Column attr="author" />
</Table> */}

// Usage: Render cell
{/* <Table data={data.data}>
  <Table.Column head="Author" attr="author">{ attr =>
    <a href="/">{attr}</a>
  }</Table.Column>
</Table> */}

export interface TableProps {
  striped: boolean,
  hover: boolean,
  bordered: boolean,
  small: boolean,
  responsive: boolean,
  children: any
}

export function Table({ striped, hover, bordered, small, responsive, children }: TableProps) {
  const { TableAdapter } = useComponents()
  return (
    <TableAdapter
      striped={striped} hover={hover}
      bordered={bordered} small={small}
      responsive={responsive}
    >{
      // eliminateFragment(children)
      children
    }</TableAdapter>
  )
}

/**
 * Sub components
 */
import { TableBody } from './TableBody'
import { TableDataCell } from './TableDataCell'
import { TableHead } from './TableHead'
import { TableHeadCell } from './TableHeadCell'
import { TableFoot } from './TableFoot'
import { TableRow } from './TableRow'

Table.Body = TableBody
Table.DataCell = TableDataCell
Table.Head = TableHead
Table.HeadCell = TableHeadCell
Table.Foot = TableFoot
Table.Row = TableRow
