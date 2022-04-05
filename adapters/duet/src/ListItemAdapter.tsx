import * as React from 'react'

import { ListItemProps } from '@quick-change/core'

import { DuetListItem as ListItem } from '@duetds/react'

/**
 * @see https://www.duetds.com/components/list/
 */
export function ListItemAdapter({ children }: ListItemProps) {
  return (
    <ListItem>
      <span slot="label">{children}</span>
    </ListItem>
  )
}