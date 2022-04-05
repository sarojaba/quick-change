import * as React from 'react'

import { TableBodyProps } from '@quick-change/core'

import { Table } from '@contentful/f36-components'

/**
 * @see https://f36.contentful.com/components/table
 */
export function TableBodyAdapter({ children }: TableBodyProps) {
  return (
    <Table.Body>{children}</Table.Body>
  )
}