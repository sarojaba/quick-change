import * as React from 'react'

import { ContainerProps } from '@quick-change/core'

import { Container } from 'gestalt'

/**
 * @see https://gestalt.pinterest.systems/container
 */
export function ContainerAdapter({ breakpoint, align, children }: ContainerProps) {
  return (
    <Container>{children}</Container>
  )
}