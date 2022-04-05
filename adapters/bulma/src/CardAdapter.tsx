import * as React from 'react'

import { CardProps } from '@quick-change/core'

import { Card } from 'rbx'

export function CardAdapter({ image, children }: CardProps) {
  return (
    <Card>
      <Card.Image src={image} />
      {children}
    </Card>
  )
}