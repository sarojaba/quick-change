import * as React from 'react'
import * as PropTypes from 'prop-types'
import PropsType from 'props-type'

import { useComponents } from '../providers'

import { eliminateFragment } from '../util'

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

const propTypes = {
  striped: PropTypes.bool,
  hover: PropTypes.bool,
  bordered: PropTypes.bool,
  small: PropTypes.bool,
  responsive: PropTypes.bool,
  children: PropTypes.node
}

const defaultProps = {
  striped: false,
  hover: false,
  bordered: false,
  small: false,
  responsive: false,
  children: undefined
}

export type TableProps = PropsType<typeof propTypes, typeof defaultProps>

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

Table.propTypes = propTypes
Table.defaultProps = defaultProps

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
