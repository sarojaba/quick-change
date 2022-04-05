import * as React from 'react'

import { ListItemProps } from '@quick-change/core'

import { ListItem } from '@momentum-ui/react'

/**
 * @see https://momentum.design/components/list
 */
export function ListItemAdapter({ children }: ListItemProps) {
  return (
    <ListItem>
      {children}
    </ListItem>
  )
}