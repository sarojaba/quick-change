import * as React from 'react'

import { ListProps } from '@quick-change/core'

import { OrderedList, UnorderedList } from 'govuk-react'

/**
 * @see 
 */
export function ListAdapter({ as, children }: ListProps) {
  switch (as) {
    case 'ordered':
      return <OrderedList>{children}</OrderedList>
    case 'unordered':
      return <UnorderedList>{children}</UnorderedList>
    default:
      return undefined
  }
}