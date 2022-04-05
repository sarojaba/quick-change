import * as React from 'react'

import { CardProps } from '@quick-change/core'

import { Card, Image, Text } from '@geist-ui/core'

/**
 * @see https://react.geist-ui.dev/en-us/components/card
 */
export function CardAdapter({ image, children }: CardProps) {  
  return (
    <Card>
      {
        image
          ? <Image src={image} />
          : null
      }
      {children}
    </Card>
  )
}