import * as React from 'react'

import { TableBodyProps } from '@quick-change/core'

import { Table } from '@instructure/ui'

/**
 * @see https://instructure.design/#Table
 */
export function TableBodyAdapter({ children }: TableBodyProps) {
  return <Table.Body>{children}</Table.Body>
}