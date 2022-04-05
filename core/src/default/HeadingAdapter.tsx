import * as React from 'react'

import { HeadingProps } from '../interfaces'

/**
 * @see https://developer.mozilla.org/ko/docs/Web/HTML/Element/Heading_Elements
 */
export function HeadingAdapter({ level, align, children }: HeadingProps) {
  switch (level) {
    case 1:
      return <h1>{children}</h1>
    case 2:
      return <h2>{children}</h2>
    case 3:
      return <h3>{children}</h3>
    case 4:
      return <h4>{children}</h4>
    case 5:
      return <h5>{children}</h5>
    case 6:
      return <h6>{children}</h6>
    default:
      return `Not supported size: ${level}`
      // throw Error(`Not supported size: ${size}`)
  }
}