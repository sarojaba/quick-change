import * as React from 'react'

import { TableRowProps } from '@quick-change/core'

import { Tr } from '@chakra-ui/react'

export function TableRowAdapter({ children }: TableRowProps) {
  return <Tr>{children}</Tr>
}