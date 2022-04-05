import * as React from 'react'

import { TableDataCellProps } from '@quick-change/core'

import { Td } from '@chakra-ui/react'

export function TableDataCellAdapter({ children }: TableDataCellProps) {
  return <Td>{children}</Td>
}