import * as React from 'react'

import { TableHeadProps } from '@quick-change/core'

import { Thead } from '@chakra-ui/react'

export function TableHeadAdapter({ children }: TableHeadProps) {
  return <Thead>{children}</Thead>
}
