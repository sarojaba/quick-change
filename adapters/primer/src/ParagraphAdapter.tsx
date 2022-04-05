import * as React from 'react'

import { ParagraphProps } from '@quick-change/core'

import { Text } from '@primer/react'

export function ParagraphAdapter({ children }: ParagraphProps) {
  return (
    <Text as="p">{children}</Text>
  )
}