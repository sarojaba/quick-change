import * as React from 'react'

import { CardBodyProps } from '@quick-change/core'

import { Box, Text } from '@sproutsocial/racine'

/**
 * @see https://seeds.sproutsocial.com/components/card
 */
export function CardBodyAdapter({ title, thumbnail, children }: CardBodyProps) {
  return (
    <Box borderTop={500} borderColor="container.border.base" px={350} py={400}>
      <Text
        as="div"
        fontSize={300}
        fontWeight="semibold"
        color="text.headline"
        mb={200}
      >
        {title}
      </Text>
      <Text as="div" fontSize={200}>
        {children}
      </Text>
    </Box>
  )
}