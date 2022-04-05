import * as React from 'react'

import { HeadingProps } from '@quick-change/core'
import { EuiTitle } from '@elastic/eui'

/**
 * @see https://elastic.github.io/eui/#/display/title
 */
export function HeadingAdapter({ level, align, children }: HeadingProps) {
  switch (level) {
    case 1:
      return <EuiTitle size="l"><h1>{children}</h1></EuiTitle>
    case 2:
      return <EuiTitle size="m"><h2>{children}</h2></EuiTitle>
    case 3:
      return <EuiTitle size="s"><h3>{children}</h3></EuiTitle>
    case 4:
      return <EuiTitle size="xs"><h4>{children}</h4></EuiTitle>
    case 5:
      return <EuiTitle size="xxs"><h5>{children}</h5></EuiTitle>
    case 6:
      return <EuiTitle size="xxxs"><h6>{children}</h6></EuiTitle>
    default:
      return `Not supported size: ${level}`
      // throw Error(`Not supported size: ${size}`)
  }
}
