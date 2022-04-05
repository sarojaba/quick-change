import * as React from 'react'

import { ListProps } from '../interfaces'

/**
 * @see 
 */
export function ListAdapter({ as, children }: ListProps) {
  switch (as) {
    case 'ordered':
      return <ol>{children}</ol>
    case 'unordered':
      return <ul>{children}</ul>
    default:
      return undefined
  }
}