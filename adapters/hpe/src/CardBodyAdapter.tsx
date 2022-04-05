import * as React from 'react'

import { CardBodyProps } from '@quick-change/core'

import { Box, CardBody, Text, Image } from 'grommet'

export function CardBodyAdapter({ title, thumbnail, children }: CardBodyProps) {
  return (
    <CardBody gap="xsmall">
      <Identifier
        icon={thumbnail ? <Image src={thumbnail} /> : undefined}
        title={title}
        subtitle=""
      />
      <Box direction="row" gap="small">
        <Text color="text-strong">{bodyContent}</Text>
      </Box>
    </CardBody>
  )
}

const Identifier = ({ title, subtitle, icon }) => (
  <Box direction="row" gap="small" align="center">
    {icon ? <Box pad={{ vertical: 'xsmall' }}>{icon}</Box> : null}
    <Box>
      <Text color="text-strong" size="xxlarge" weight="bold">
        {title}
      </Text>
      <Text>{subtitle}</Text>
    </Box>
  </Box>
)