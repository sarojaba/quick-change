import * as React from 'react'

import { TableBodyProps } from '@quick-change/core'

import { TableBody } from 'carbon-components-react'

export function TableBodyAdapter({ children }: TableBodyProps) {
  return <TableBody>{children}</TableBody>
}