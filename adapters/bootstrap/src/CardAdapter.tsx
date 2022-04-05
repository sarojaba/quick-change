import * as React from 'react'

import { CardProps } from '@quick-change/core'

import { Card } from 'react-bootstrap'

/**
 * @see https://react-bootstrap.github.io/components/cards/
 */
export function CardAdapter({ image, children }: CardProps) {
  return (
    <Card>
      <Card.Img src={image} />
      <Card.Body>
        {children}
      </Card.Body>
    </Card>
  )
}
