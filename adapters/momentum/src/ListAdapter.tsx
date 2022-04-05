import * as React from 'react'

import { ListProps } from '@quick-change/core'

import { List } from '@momentum-ui/react'

/**
 * @see https://momentum.design/components/list
 */
export function ListAdapter({ as, children }: ListProps) {
  return (
    <List>{children}</List>
  )
}