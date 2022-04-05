import * as React from 'react'

import { ContainerProps } from '@quick-change/core'

import { Container } from '@ruter-ds/rds-components';

/**
 * @see https://components.ruter.as/#/Components/Grid/Container
 */
export function ContainerAdapter({ breakpoint, align, children }: ContainerProps) {
  return (
    <Container>{children}</Container>
  )
}