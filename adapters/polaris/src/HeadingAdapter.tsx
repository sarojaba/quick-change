import * as React from 'react'

import { HeadingProps } from '@quick-change/core'

import { Heading } from '@shopify/polaris'

/**
 * @see 
 */
export function HeadingAdapter({ level, align, children }: HeadingProps) {
  switch (level) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      return <Heading element={`h${level}`}>{ children }</Heading>
    default:
      return `Not supported size: ${level}`
      // throw Error(`Not supported size: ${size}`)
  }
}