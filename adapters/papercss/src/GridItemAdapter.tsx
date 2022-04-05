import * as React from 'react'

import { GridItemProps } from '@quick-change/core'

export function GridItemAdapter({ span, offset, children }: GridItemProps) {
  return (
    <div className={classNameBySize(span)}>{ children }</div>
  )
}

function classNameBySize(span) {
  switch(span) {
    case undefined:
      return ''
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
    case '10':
    case '11':
    case '12':
      return `col-${span} col`
    default:
      throw Error(`Not supported size: ${span}`)
  }
}