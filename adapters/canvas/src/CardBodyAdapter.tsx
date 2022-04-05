import * as React from 'react'

import { CardBodyProps } from '@quick-change/core'

import { Card } from '@workday/canvas-kit-react'

/**
 * @see 
 */
export function CardBodyAdapter({ title, thumbnail, children }: CardBodyProps) {
  return <>
    <Card.Heading>{title}</Card.Heading>
    <Card.Body>{children}</Card.Body>
  </>
}