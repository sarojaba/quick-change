import * as React from 'react'

import { HeadingProps } from '@quick-change/core'

import { Heading } from '@instructure/ui'

/**
 * @see https://instructure.design/#Heading
 */
export function HeadingAdapter({ level, align, children }: HeadingProps) {
  switch (level) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      return <Heading level={`h${level}`}>{ children }</Heading>
    default:
      return `Not supported size: ${level}`
      // throw Error(`Not supported size: ${size}`)
  }
}