import * as React from 'react'

import { HeadingProps } from '@quick-change/core'

import { Heading } from '@heathmont/moon-core'

export function HeadingAdapter({ level, align, children }: HeadingProps) {
  return (
    <Heading size={sizeByLevel(level)}>{children}</Heading>
  )
}

function sizeByLevel(level) {
  switch (level) {
    case 1:
      return 72
    case 2:
      return 64
    case 3:
      return 56
    case 4:
      return 48
    case 5:
      return 32
    case 6:
      return 24
    default:
      return 20
  }
}