import * as React from 'react'

import { TableHeadProps } from '@quick-change/core'

import { Table } from '@instructure/ui'

/**
 * @see https://instructure.design/#Table
 */
export function TableHeadAdapter({ children }: TableHeadProps) {
  return <Table.Head>{children}</Table.Head>
}
