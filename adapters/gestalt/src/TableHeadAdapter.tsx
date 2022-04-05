import * as React from 'react'

import { TableHeadProps } from '@quick-change/core'

import { Table } from 'gestalt'

export function TableHeadAdapter({ children }: TableHeadProps) {
  return <Table.Header>{children}</Table.Header>
}
