import * as React from 'react'

import { TableView } from '@adobe/react-spectrum'

export function TableAdapter({ striped, hover, bordered, small, responsive, children }) {
  return <TableView>{children}</TableView>
}