import * as React from 'react'

import { HeadingProps } from '@quick-change/core'

import { Text } from '@geist-ui/core'

export function HeadingAdapter({ level, align, children }: HeadingProps) {
  switch (level) {
    case 1:
      return <Text h1>{children}</Text>
    case 2:
      return <Text h2>{children}</Text>
    case 3:
      return <Text h3>{children}</Text>
    case 4:
      return <Text h4>{children}</Text>
    case 5:
      return <Text h5>{children}</Text>
    case 6:
      return <Text h6>{children}</Text>
    default:
      return `Not supported size: ${level}`
      // throw Error(`Not supported size: ${size}`)
  }
}