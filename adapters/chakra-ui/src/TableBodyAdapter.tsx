import * as React from 'react'

import { TableBodyProps } from '@quick-change/core'

import { Tbody } from '@chakra-ui/react'

export function TableBodyAdapter({ children }: TableBodyProps) {
  return <Tbody>{children}</Tbody>
}