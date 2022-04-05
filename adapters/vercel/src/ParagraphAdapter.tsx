import * as React from 'react'

import { ParagraphProps } from '@quick-change/core'

import { Text } from '@geist-ui/core'

export function ParagraphAdapter({ children }: ParagraphProps) {
  return <Text p>{children}</Text>
}