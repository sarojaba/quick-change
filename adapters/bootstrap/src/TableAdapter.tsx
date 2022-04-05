import * as React from 'react'

import { Table } from 'react-bootstrap'

export function TableAdapter({ striped, hover, bordered, small, responsive, children }) {
  return (
    <Table
      striped={striped}
      hover={hover}
      bordered={bordered}
      size={small ? 'sm' : undefined}
      responsive={responsive}>
      {children}
    </Table>
  )
}