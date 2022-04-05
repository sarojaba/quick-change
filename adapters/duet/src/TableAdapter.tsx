import * as React from 'react'

import { TableProps } from '@quick-change/core'

import { DuetTable as Table } from '@duetds/react'

/**
 * @see https://www.duetds.com/components/table/
 */
export function TableAdapter({ striped, hover, bordered, small, responsive, children }: TableProps) {
  return (
    <Table>
      <table>{children}</table>
    </Table>
  )
}