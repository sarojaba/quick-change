import * as React from 'react'

import { ContainerProps } from '@quick-change/core'

import { Container } from '@mantine/core'

export function ContainerAdapter({ breakpoint, align, children }: ContainerProps) {
  return (
    <Container>{children}</Container>
  )
}