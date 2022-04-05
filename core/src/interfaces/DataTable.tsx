import * as React from 'react'
import * as PropTypes from 'prop-types'
import PropsType from 'props-type'

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

const propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      key: PropTypes.string
    })
  )
}

const defaultProps = {
  data: [],
  columns: []
}

export type DataTableProps = PropsType<typeof propTypes, typeof defaultProps>

export function DataTable({ data, columns }: DataTableProps) {
  const { DataTableAdapter } = useComponents()
  return (
    <DataTableAdapter data={data} columns={columns} />
  )
}

DataTable.propTypes = propTypes
DataTable.defaultProps = defaultProps
