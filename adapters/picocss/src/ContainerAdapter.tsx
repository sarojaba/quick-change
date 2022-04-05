import * as React from 'react'

import { ContainerProps } from '@quick-change/core'

export function ContainerAdapter({ breakpoint, align, children }: ContainerProps) {

  return (
    <div className={`container${classNameByBreakpoint(breakpoint)}`}>
      { children }
    </div>
  )
}

function classNameByBreakpoint(breakpoint) {
  switch(breakpoint) {
    case 'fluid':
      return '-fluid'
    default:
      return ''
  }
}