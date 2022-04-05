import * as React from 'react'

import { CardBodyProps } from '@quick-change/core'

import { Text } from '@geist-ui/core'

export function CardBodyAdapter({ title, thumbnail, children }: CardBodyProps) {
  return <>
    <Text h4>{title}</Text>
    <Text>{children}</Text>
  </>
}