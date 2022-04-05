import * as React from 'react'

import { TableProps } from '@quick-change/core'

import { Table } from '@contentful/f36-components'

/**
 * @see https://f36.contentful.com/components/table
 */
export function TableAdapter({ striped, hover, bordered, small, responsive, children }: TableProps) {
  return (
    <Table>{children}</Table>
  )
}