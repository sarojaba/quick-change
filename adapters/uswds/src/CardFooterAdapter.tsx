import * as React from 'react'

import { CardFooterProps } from '@quick-change/core'

import { CardFooter } from '@trussworks/react-uswds'

export function CardFooterAdapter({ children }: CardFooterProps) {
  return (
    <CardFooter>{children}</CardFooter>
  )
}