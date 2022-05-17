import * as React from 'react'

import { useComponents } from '../providers'

export interface ListItemProps {
  children: any
}

export function ListItem({ children }: ListItemProps) {
  const { ListItemAdapter } = useComponents()
  return <ListItemAdapter>{children}</ListItemAdapter>
}
