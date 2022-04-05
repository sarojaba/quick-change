import * as React from 'react'

import { GridItemProps } from '@quick-change/core'

export function GridItemAdapter({ span, offset, children }: GridItemProps) {
  return (
    <div className={`cell ${classNameBySize(span)} ${classNameByOffset(offset)}`}>
      { children }
    </div>
  )
}

function classNameBySize(span) {
  switch(span) {
    case undefined:
      return 'auto'
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
      return `small-${span} medium-${span} large-${span}`
    default:
      throw Error(`Not supported size: ${span}`)
  }
}

function classNameByOffset(offset) {
  switch(offset) {
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
      return `small-offset-${offset} medium-offset-${offset} large-offset-${offset}`
    default:
      throw Error(`Not supported offset: ${offset}`)
  }
}
