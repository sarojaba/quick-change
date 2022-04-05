import * as React from 'react'

import { TableBodyProps } from '../interfaces'

/**
 * @see 
 */
export function TableBodyAdapter({ children }: TableBodyProps) {
  return <tbody>{children}</tbody>
}