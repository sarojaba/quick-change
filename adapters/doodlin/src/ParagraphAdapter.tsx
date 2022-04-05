import * as React from 'react'

import { ParagraphProps } from '@quick-change/core'

import { Text } from 'doodlin-design-system'

/**
 * @see https://design.doodlin.co.kr/?path=/story/component-text--default
 */
export function ParagraphAdapter({ children }: ParagraphProps) {
  return (
    <Text>
      {children}
    </Text>
  )
}