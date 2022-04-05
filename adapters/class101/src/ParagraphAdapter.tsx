import * as React from 'react'

import { ParagraphProps } from '@quick-change/core'

import { Body1 } from '@class101/ui'

/**
 * @see https://ui.class101.dev/core/typography#bodies
 */
export function ParagraphAdapter({ children }: ParagraphProps) {
  return (
    <Body1>{children}</Body1>
  )
}