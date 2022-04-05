import * as React from 'react'

import { CardProps } from '@quick-change/core'

import { Box, Card, Image } from 'grommet'

/**
 * @see https://design-system.hpe.design/components/card
 */
export function CardAdapter({ image, children }: CardProps) {
  return (
    <Card width="medium">
      {
        image
          ? <Box height="small" width="medium">
              <Image src={image} fit="cover" />
            </Box>
          : null
      }
      {children}
    </Card>
  )
}
