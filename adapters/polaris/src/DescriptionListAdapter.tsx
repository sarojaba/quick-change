import * as React from 'react'

import { DescriptionListProps } from '@quick-change/core'

import { DescriptionList } from '@shopify/polaris'

/**
 * @see https://github.com/Shopify/polaris-react/tree/main/src/components/DescriptionList
 */
export function DescriptionListAdapter({ children }: DescriptionListProps) {
  const terms = React.Children.toArray(children)
    .filter(child => child.type.name === 'DescriptionListTerm')
    .map(child => child.props.children)

  const descriptions = React.Children.toArray(children)
    .filter(child => child.type.name === 'DescriptionListDescription')
    .map(child => child.props.children)

  const items = terms.map((t, i) => {
    return {
      term: t,
      description: descriptions[i]
    }
  })

  return (
    <DescriptionList items={items} />
  )
}
