import * as React from 'react'

import { TableHeadProps } from '@quick-change/core'

import { TableHead } from 'carbon-components-react'

export function TableHeadAdapter({ children }: TableHeadProps) {
  return <TableHead>{children}</TableHead>
}