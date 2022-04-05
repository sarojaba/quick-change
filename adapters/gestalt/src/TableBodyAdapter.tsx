import * as React from 'react'

import { TableBodyProps } from '@quick-change/core'

import { Table } from 'gestalt'

export function TableBodyAdapter({ children }: TableBodyProps) {
  return <Table.Body>{children}</Table.Body>
}