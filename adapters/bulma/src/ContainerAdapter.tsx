import * as React from 'react'

import { ContainerProps } from '@quick-change/core'

import { Container } from 'rbx'

export function ContainerAdapter({ breakpoint, align, children }: ContainerProps) {
  return (
    <Container breakpoint={breakpointClassName(breakpoint)}>
      {children}
    </Container>
  )
}

function breakpointClassName(breakpoint) {
  switch(breakpoint) {
    case undefined:
      return ''
    case 'widescreen':
      return 'is-widescreen'
    case 'fullhd':
      return 'is-fullhd'
    case 'fluid':
      return 'is-fluid'
    default:
      throw Error(`Not supported breakpoint: ${breakpoint}`)
  }
}
