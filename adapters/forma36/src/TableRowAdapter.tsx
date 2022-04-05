import * as React from 'react'

import { TableRowProps } from '@quick-change/core'

import { Table } from '@contentful/f36-components'

/**
 * @see https://f36.contentful.com/components/table
 */
export function TableRowAdapter({ children }: TableRowProps) {
  return <Table.Row>{children}</Table.Row>
}