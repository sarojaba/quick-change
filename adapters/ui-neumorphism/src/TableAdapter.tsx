import * as React from 'react'

import { Table } from 'ui-neumorphism'

// Usage: HTML-like
{/* <Table>
  <Table.Head>{ thead() }</Table.Head>
  <Table.Body>{ tbody(data) }</Table.Body>
</Table> */}

export function TableAdapter({ striped, hover, bordered, small, responsive, children }: any) {
  return <Table>{children}</Table>
}
