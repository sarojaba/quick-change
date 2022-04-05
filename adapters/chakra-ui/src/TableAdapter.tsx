import * as React from 'react'

import { TableProps } from '@quick-change/core'

import { Table } from '@chakra-ui/react'

export function TableAdapter({ striped, hover, bordered, small, responsive, children }: TableProps) {
  return <Table>{children}</Table>
}