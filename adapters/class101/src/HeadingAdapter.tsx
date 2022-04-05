import * as React from 'react'

import { HeadingProps } from '@quick-change/core'

import {
  Headline1, Headline2, Headline3,
  Subtitle1, Subtitle2
} from '@class101/ui'

/**
 * @see https://ui.class101.dev/core/typography#headings
 */
export function HeadingAdapter({ level, align, children }: HeadingProps) {
  switch (level) {
    case 1:
      return <Headline1>{children}</Headline1>
    case 2:
      return <Headline2>{children}</Headline2>
    case 3:
      return <Headline3>{children}</Headline3>
    case 4:
      return <Subtitle1>{children}</Subtitle1>
    case 5:
    case 6:
      return <Subtitle2>{children}</Subtitle2>
    default:
      return `Not supported size: ${level}`
      // throw Error(`Not supported size: ${size}`)
  }
}