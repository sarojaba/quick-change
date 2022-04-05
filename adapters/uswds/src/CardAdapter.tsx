import * as React from 'react'

import { CardProps } from '@quick-change/core'

import { Card, CardMedia } from '@trussworks/react-uswds'

export function CardAdapter({ image, children }: CardProps) {
  return (
    <Card>
      <CardMedia>
        <img src={image} />
      </CardMedia>
      {children}
    </Card>
  )
}