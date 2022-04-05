import * as React from 'react'

import { Table } from 'govuk-react'

export function TableAdapter({ striped, hover, bordered, small, responsive, children }: any) {
  const c = React.Children.toArray(children)
    .filter(child => child.type.name === 'TableHead')[0]
  
  return <Table head={c.props.children}>{children}</Table>
}
