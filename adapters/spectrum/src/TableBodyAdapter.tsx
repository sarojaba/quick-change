import * as React from 'react'

import { TableBodyProps } from '@quick-change/core'

import { TableBody } from '@adobe/react-spectrum'

export function TableBodyAdapter({ children }: TableBodyProps) {
  return <TableBody>{children}</TableBody>
}