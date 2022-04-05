import * as React from 'react'

import { ListProps } from '@quick-change/core'

import { List } from '@instructure/ui'

/**
 * @see https://instructure.design/#List
 */
export function ListAdapter({ as, children }: ListProps) {
  switch (as) {
    case 'ordered':
      return <List as="ol">{children}</List>
    case 'unordered':
      return <List>{children}</List>
    default:
      return undefined
  }
}