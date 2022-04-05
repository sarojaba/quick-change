import * as React from 'react'

import { HeadingProps } from '@quick-change/core'

import { H1, H2, H3, H4, H5, H6 } from 'ui-neumorphism'

export function HeadingAdapter({ level, align, children }: HeadingProps) {
  switch (level) {
    case 1:
      return <H1>{ children }</H1>
    case 2:
      return <H2>{ children }</H2>
    case 3:
      return <H3>{ children }</H3>
    case 4:
      return <H4>{ children }</H4>
    case 5:
      return <H5>{ children }</H5>
    case 6:
      return <H6>{ children }</H6>
    default:
      return `Not supported size: ${level}`
      // throw Error(`Not supported size: ${size}`)
  }
}