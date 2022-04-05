import * as React from 'react'

import { CardFooterProps } from '@quick-change/core'

import { StyledAction } from 'baseui/card'

export function CardFooterAdapter({ children }: CardFooterProps) {
  return (
    <StyledAction>{children}</StyledAction>
  )
}