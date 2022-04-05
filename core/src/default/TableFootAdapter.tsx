import * as React from 'react'

import { TableFootProps } from '../interfaces'

/**
 * @see 
 */
export function TableFootAdapter({ children }: TableFootProps) {
  return <tfoot>{children}</tfoot>
}