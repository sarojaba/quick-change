import * as React from 'react'

import { HeadingProps } from '@quick-change/core'

import { Heading } from 'gestalt'

export function HeadingAdapter({ level, align, children }: HeadingProps) {
  switch (level) {
    case 1:
      return <Heading size="lg">{children}</Heading>
    case 2:
      return <Heading size="md">{children}</Heading>
    case 3:
      return <Heading size="sm">{children}</Heading>
    case 4:
    case 5:
    case 6:
    default:
      return `Not supported size: ${level}`
      // throw Error(`Not supported size: ${size}`)
  }
}