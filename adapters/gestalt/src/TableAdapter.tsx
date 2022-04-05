import * as React from 'react'

import { Table } from 'gestalt'

/**
 * @see https://gestalt.pinterest.systems/table
 */
export function TableAdapter({ striped, hover, bordered, small, responsive, children }: any) {
  return (
    <Table accessibilityLabel={undefined}>
      {children}
    </Table>
  )
}