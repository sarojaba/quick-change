import * as React from 'react'

import { ContainerProps } from '@quick-change/core'

import { Container } from 'react-bootstrap'

export function ContainerAdapter({ breakpoint, align, children }: ContainerProps) {
  return (
    <Container fluid={fluidByBreakpoint(breakpoint)}>{children}</Container>
  )
}

function fluidByBreakpoint(breakpoint) {
  switch(breakpoint) {
    case undefined:
      return false
    case 'fluid':
      return true
    default:
      return false
      // throw Error(`Not supported breakpoint: ${breakpoint}`)
  }
}