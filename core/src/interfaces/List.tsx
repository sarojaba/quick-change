import * as React from 'react'

import { useComponents } from '../providers'

export interface ListProps {
  // as: oneOf(['ordered', 'unordered']),
  as: string,
  children: any
}

export function List({ as, children }: ListProps) {
  const { ListAdapter } = useComponents()
  return (
    <ListAdapter as={as}>
      {children}
    </ListAdapter>
  )
}

/**
 * Sub components
 */
import { ListItem } from './ListItem'

List.Item = ListItem
