import * as React from 'react'

import { ContainerProps } from '@quick-change/core'

import { Display } from '@geist-ui/core'

export function ContainerAdapter({ breakpoint, align, children }: ContainerProps) {
  return (
    <Display>{children}</Display>
  )
}