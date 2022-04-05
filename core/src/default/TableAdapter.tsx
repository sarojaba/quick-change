import * as React from 'react'

import { TableProps } from '../interfaces'

/**
 * @see 
 */
export function TableAdapter({ striped, hover, bordered, small, responsive, children }: TableProps) {
  return <table>{children}</table>
}