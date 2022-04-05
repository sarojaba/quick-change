import * as React from 'react'

import { HeadingProps } from '@quick-change/core'

import { Text } from 'doodlin-design-system'

/**
 * @see https://developer.mozilla.org/ko/docs/Web/HTML/Element/Heading_Elements
 */
export function HeadingAdapter({ level, align, children }: HeadingProps) {
  switch (level) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      return <Text variant={`h${level}`}>{children}</Text>
    case 6:
    default:
      return `Not supported size: ${level}`
      // throw Error(`Not supported size: ${size}`)
  }
}