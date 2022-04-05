import * as React from 'react'

import { CardProps } from '@quick-change/core'

import { Card } from '@workday/canvas-kit-react'

/**
 * @see https://workday.github.io/canvas-kit/?path=/docs/components-containers-card-react--basic
 */
export function CardAdapter({ image, children }: CardProps) {
  return (
    <Card>
      {children}
    </Card>
  )
}