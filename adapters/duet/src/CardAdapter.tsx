import * as React from 'react'

import { CardProps } from '@quick-change/core'

import { DuetCard as Card } from '@duetds/react'

/**
 * @see https://www.duetds.com/components/card/
 */
export function CardAdapter({ image, children }: CardProps) {
  return (
    <Card margin="none" image={image}>
      {children}
    </Card>
  )
}