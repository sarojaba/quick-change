import * as React from 'react'

import { TableProps } from '@quick-change/core'

import { Table } from '@instructure/ui'

/**
 * @see https://instructure.design/#Table
 */
export function TableAdapter({ striped, hover, bordered, small, responsive, children }: TableProps) {
  return (
    <Table caption="">
      {children}
    </Table>
  )
}