import * as React from 'react'

import { HeadingProps } from '@quick-change/core'

export function HeadingAdapter({ level, align, children }: HeadingProps) {

  const alignClassName = classNameByAlign(align)

  switch (level) {
    case 1:
      return <h1 className={alignClassName}>{ children }</h1>
    case 2:
      return <h2 className={alignClassName}>{ children }</h2>
    case 3:
      return <h3 className={alignClassName}>{ children }</h3>
    case 4:
      return <h4 className={alignClassName}>{ children }</h4>
    case 5:
      return <h5 className={alignClassName}>{ children }</h5>
    case 6:
      return <h6 className={alignClassName}>{ children }</h6>
    default:
      throw Error(`Not supported level: ${level}`)
  }
}

function classNameByAlign(align) {
  switch (align) {
    case undefined:
      return ''
    case 'center':
      return 'has-text-centered'
    case 'left':
      return ''
    case 'right':
      return 'has-text-right'
    default:
      return ''
  }
}