import * as React from 'react'

import { DataTableProps } from '@quick-change/core'

import { FastDataGrid } from './components'

export function DataTableAdapter({ data, columns }: DataTableProps) {
  return (
    <FastDataGrid rowsData={[
      {item1: "value 1-1",item2: "value 2-1",item3: "value 4-1",item4: "value 5-1",},
      {item1: "value 1-2",item2: "value 2-2",item3: "value 4-2",item4: "value 5-2",}
    ]}/>
  )
}