import * as React from 'react'

import { HeadingProps } from '@quick-change/core'

import { Heading } from 'web-toolkit'

/**
 * @see https://romgrk.github.io/web-toolkit/docs/component/heading
 */
export function HeadingAdapter({ level, align, children }: HeadingProps) {
  return (
    <Heading weight={weightByLevel(level)}>
      {children}
    </Heading>
  )
}

function weightByLevel(level) {
  switch (level) {
    case 1:
      return 900
    case 2:
      return 700
    case 3:
      return 400
    case 4:
      return 300
    case 5:
      return 100
    case 6:
    default:
      return `Not supported size: ${level}`
      // throw Error(`Not supported size: ${size}`)
  }
}