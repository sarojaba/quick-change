import * as React from 'react'

import { HeadingProps } from '@quick-change/core'

export function HeadingAdapter({ level, align, children }: HeadingProps) {  
  switch (level) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      return <div className={`h${level}`}>{children}</div>
    default:
      return `Not supported size: ${level}`
      // throw Error(`Not supported size: ${size}`)
  }
}