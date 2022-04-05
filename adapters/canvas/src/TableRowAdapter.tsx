import * as React from 'react'

import { TableRowProps } from '@quick-change/core'

import { TableRow } from '@workday/canvas-kit-react'

/**
 * @see https://workday.github.io/canvas-kit/?path=/docs/components-containers-table-react--row-header#tablerow
 */
export function TableRowAdapter({ children }: TableRowProps) {
  return <TableRow>{children}</TableRow>
}