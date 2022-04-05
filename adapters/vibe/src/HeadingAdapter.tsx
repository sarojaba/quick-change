import * as React from 'react'

import { HeadingProps } from '@quick-change/core'

import { Heading } from 'monday-ui-react-core'

/**
 * @see https://style.monday.com/?path=/docs/text-heading--overview
 */
export function HeadingAdapter({ level, align, children }: HeadingProps) {
  switch (level) {
    case 1:
      return <h1>{ children }</h1>
    case 2:
      return <h2>{ children }</h2>
    case 3:
      return <h3>{ children }</h3>
    case 4:
      return <h4>{ children }</h4>
    case 5:
      return <h5>{ children }</h5>
    case 6:
    default:
      return `Not supported size: ${level}`
      // throw Error(`Not supported size: ${size}`)
  }
}

function typeByLevel(level) {
  switch (level) {
    case 1:
      return Heading.types.h1
    case 2:
      return Heading.types.h2
    case 3:
      return Heading.types.h3
    case 4:
      return Heading.types.h4
    case 5:
      return Heading.types.h5
    case 6:
    default:
      return undefined
      // throw Error(`Not supported size: ${size}`)
  }
}