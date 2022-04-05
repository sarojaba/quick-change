import * as React from 'react'

import { ParagraphProps } from '@quick-change/core'

import { DuetParagraph as Paragraph } from '@duetds/react'

/**
 * @see https://www.duetds.com/components/paragraph/
 */
export function ParagraphAdapter({ children }: ParagraphProps) {
  return (
    <Paragraph>{children}</Paragraph>
  )
}