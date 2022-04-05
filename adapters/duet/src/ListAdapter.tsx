import * as React from 'react'

import { ListProps } from '@quick-change/core'

import { DuetList as List } from '@duetds/react'

/**
 * @see https://www.duetds.com/components/list/
 */
export function ListAdapter({ as, children }: ListProps) {
  return (
    <List>{children}</List>
  )
}