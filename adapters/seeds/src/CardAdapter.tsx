import * as React from 'react'

import { CardProps } from '@quick-change/core'

import { Card, Box } from '@sproutsocial/racine'

/**
 * @see https://seeds.sproutsocial.com/components/card
 */
export function CardAdapter({ image, children }: CardProps) {
  return (
    <Card>
      {children}
    </Card>
  )
}