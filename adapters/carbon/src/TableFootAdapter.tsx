import * as React from 'react'

import { TableFootProps } from '@quick-change/core'

import { TableFoot } from 'carbon-components-react'

export function TableFootAdapter({ children }: TableFootProps) {
  return <TableFoot>{children}</TableFoot>
}