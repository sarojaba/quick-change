import * as React from 'react'

import { TableProps } from '@quick-change/core'

import { Table } from '@workday/canvas-kit-react'

/**
 * @see https://workday.github.io/canvas-kit/?path=/docs/components-containers-table-react--basic
 */
export function TableAdapter({ striped, hover, bordered, small, responsive, children }: TableProps) {
  return <Table>{children}</Table>
}