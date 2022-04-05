import * as React from 'react'

import { ContainerProps } from '@quick-change/core'

import { Container } from 'semantic-ui-react'

export function ContainerAdapter({ breakpoint, align, children }: ContainerProps) {
  const props = {}

  if (breakpoint === 'fluid') {
    props['fluid'] = true
  }
  
  return (
    <Container {...props}>{children}</Container>
  )
}