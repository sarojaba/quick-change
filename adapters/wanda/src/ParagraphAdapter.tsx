import * as React from 'react'

import { ParagraphProps } from '@quick-change/core'

import { Text } from '@wonderflow/react-components'

/**
 * @see https://design.wonderflow.ai/components/typography/text
 */
export function ParagraphAdapter({ children }: ParagraphProps) {
  return (
    <Text>{children}</Text>
  )
}