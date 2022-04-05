import * as React from 'react'

import { TableFootProps } from '@quick-change/core'

import { Tfoot } from '@chakra-ui/react'

export function TableFootAdapter({ children }: TableFootProps) {
  return <Tfoot>{children}</Tfoot>
}