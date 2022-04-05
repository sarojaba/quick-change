import * as React from 'react'

import { ParagraphProps } from '@quick-change/core'

import { Text } from '@heathmont/moon-core'

/**
 * @see https://moon.io/typography
 */
export function ParagraphAdapter({ children }: ParagraphProps) {
  return (
    <Text>{children}</Text>
  )
}