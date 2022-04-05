import * as React from 'react'

import { TableRowProps } from '../interfaces'

/**
 * @see 
 */
export function TableRowAdapter({ children }: TableRowProps) {
  return <tr>{children}</tr>
}