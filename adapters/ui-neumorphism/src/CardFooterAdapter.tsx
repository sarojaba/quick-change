import * as React from 'react'

import { CardFooterProps } from '@quick-change/core'

import { CardAction } from 'ui-neumorphism'

export function CardFooterAdapter({ children }: CardFooterProps) {
  return (
    <CardAction>{children}</CardAction>
  )
}