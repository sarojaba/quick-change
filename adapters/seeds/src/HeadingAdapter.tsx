import * as React from 'react'

import { HeadingProps } from '@quick-change/core'

import { Text } from '@sproutsocial/racine'

/**
 * @see 
 */
export function HeadingAdapter({ level, align, children }: HeadingProps) {
  switch (level) {
    case 1:
      return <Text.Headline as="h1">{ children }</Text.Headline>
    case 2:
      return <Text.SubHeadline as="h2">{ children }</Text.SubHeadline>
    case 3:
      return <Text.SmallSubHeadline as="h3">{ children }</Text.SmallSubHeadline>
    case 4:
      return <Text.Byline as="h4">{ children }</Text.Byline>
    case 5:
      return <Text.SmallByline as="h5">{ children }</Text.SmallByline>
    case 6:
    default:
      return `Not supported size: ${level}`
      // throw Error(`Not supported size: ${size}`)
  }
}