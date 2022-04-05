import * as React from 'react'

import { ContainerProps } from '@quick-change/core'

import { Main } from 'govuk-react'

export function ContainerAdapter({ breakpoint, align, children }: ContainerProps) {
  return <Main>{children}</Main>
}