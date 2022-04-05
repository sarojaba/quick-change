import * as React from 'react'

import { HeadingProps } from '@quick-change/core'

import { Heading } from 'govuk-react'

export function HeadingAdapter({ level, align, children }: HeadingProps) {
  return (
    <Heading size={sizeByLevel(level)}>
      {children}
    </Heading>
  )
}

function sizeByLevel(level) {
  switch (level) {
    case 1:
      return 'XLARGE'
    case 2:
      return 'LARGE'
    case 3:
      return 'MEDIUM'
    case 4:
    case 5:
    case 6:
      return 'SMALL'
    default:
      return `Not supported size: ${level}`
      // throw Error(`Not supported size: ${size}`)
  }
}