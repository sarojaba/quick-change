import * as React from 'react'

import { GridItemProps } from '@quick-change/core'

export function GridItemAdapter({ span, offset, children }: GridItemProps) {
  return (
    <div className={className(span, offset)}>{ children }</div>
  )
}

function className(span, offset) {
  return 'column ' + sizeClassSuffix(span) + ' ' + offsetClassName(offset)
}

function sizeClassSuffix(span) {
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
      return `is-${span}`
    default:
      throw Error(`Not supported size: ${span}`)
  }
}

function offsetClassName(offset) {
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
      return `is-offset-${offset}`
    default:
      throw Error(`Not supported offset: ${offset}`)
  }
}