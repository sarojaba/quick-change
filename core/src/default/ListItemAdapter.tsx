import * as React from 'react'

import { ListItemProps } from '../interfaces'

/**
 * @see 
 */
export function ListItemAdapter({ children }: ListItemProps) {
  return <li>{children}</li>
}