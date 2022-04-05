import * as React from 'react'

import { TableHeadProps } from '@quick-change/core'

import { Table } from '@contentful/f36-components'

/**
 * @see https://f36.contentful.com/components/table
 */
export function TableHeadAdapter({ children }: TableHeadProps) {
  return (
    <Table.Head>{children}</Table.Head>
  )
}
