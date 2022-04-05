import * as React from 'react'

import { TableRowProps } from '@quick-change/core'

import { Table } from '@instructure/ui'

/**
 * @see https://instructure.design/#Table
 */
export function TableRowAdapter({ children }: TableRowProps) {
  return <Table.Row>{children}</Table.Row>
}