import * as React from 'react'

import { ParagraphProps } from '@quick-change/core'

import { Paragraph } from 'grommet'

export function ParagraphAdapter({ children }: ParagraphProps) {
  return (
    <Paragraph>{children}</Paragraph>
  )
}