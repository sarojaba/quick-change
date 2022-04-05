import * as React from 'react'

import { Text } from '@geist-ui/core'

import { BlockquoteProps } from '@quick-change/core'

export function BlockquoteAdapter({ children }: BlockquoteProps) {
  return (
    <Text blockquote>{children}</Text>
  )
}