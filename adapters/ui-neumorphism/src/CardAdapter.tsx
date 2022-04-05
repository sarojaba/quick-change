import * as React from 'react'

import { CardProps } from '@quick-change/core'

import { Card, CardMedia } from 'ui-neumorphism'

/**
 * @see https://akaspanion.github.io/ui-neumorphism/card
 */
export function CardAdapter({ image, children }: CardProps) {
  return (
    <Card>
      {image ? <CardMedia src={image} /> : null}
      {children}
    </Card>
  )
}