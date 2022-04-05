import * as React from 'react'

import { CardFooterProps } from '@quick-change/core'

import { Card } from '@geist-ui/core'

export function CardFooterAdapter({ children }: CardFooterProps) {
  return (
    <Card.Footer>{children}</Card.Footer>
  )
}