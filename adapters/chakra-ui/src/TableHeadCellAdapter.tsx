import * as React from 'react'

import { TableHeadCellProps } from '@quick-change/core'

import { Th } from '@chakra-ui/react'

export function TableHeadCellAdapter({ children }: TableHeadCellProps) {
  return <Th>{children}</Th>
}
