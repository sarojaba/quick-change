import * as React from 'react'

import { Table } from 'carbon-components-react'

export function TableAdapter({ striped, hover, bordered, small, responsive, children }) {
  return <Table>{children}</Table>
}