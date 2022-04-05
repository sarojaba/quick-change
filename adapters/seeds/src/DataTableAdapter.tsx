import * as React from 'react'

import { DataTableProps } from '@quick-change/core'

import { Table } from '@sproutsocial/racine'

/**
 * @see https://seeds.sproutsocial.com/components/table
 */
export function DataTableAdapter({ data, columns }: DataTableProps) {
  return (
    <Table
      head={
        columns.map((c, i) => {
          return {
            id: i,
            content: c['title']
          }
        })
      }
      rows={
        data.map((d, i) => {
          return {
            id: i,
            cells: columns.map((c, j) => {
              return {
                id: j,
                content: d[c['key']]
              }
            })
          }
        })
      }
    />
  )
}