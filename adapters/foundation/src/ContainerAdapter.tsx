import * as React from 'react'

import { ContainerProps } from '@quick-change/core'

export function ContainerAdapter({ breakpoint, align, children }: ContainerProps) {
  return (
    <div className={`grid-container ${breakpointClassName(breakpoint)} ${classNameByAlign(align)}`}>
      { children }
    </div>
  )
}

function breakpointClassName(breakpoint) {
  switch(breakpoint) {
    case undefined:
    case 'widescreen':
    case 'fullhd':
      return ''
    case 'fluid':
      return 'fluid'
    default:
      throw Error(`Not supported breakpoint: ${breakpoint}`)
  }
}

function classNameByAlign(align) {
  switch (align) {
    case undefined:
      return ''
    case 'center':
      return 'text-center'
    case 'left':
      return 'text-left'
    case 'right':
      return 'text-right'
    default:
      return ''
  }
}