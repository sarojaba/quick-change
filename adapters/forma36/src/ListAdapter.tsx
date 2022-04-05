import * as React from 'react'

import { ListProps } from '@quick-change/core'

import { List } from '@contentful/f36-components'

/**
 * @see https://f36.contentful.com/components/list
 */
export function ListAdapter({ as, children }: ListProps) {
  return (
    <List as={asByAs(as)}>
      {children}
    </List>
  )
}

function asByAs(as) {
  switch (as) {
    case 'ordered':
      return 'ol'
    case 'unordered':
      return 'ul'
    default:
      return undefined
  }
}