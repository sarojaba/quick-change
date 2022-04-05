import * as React from 'react'

import { ParagraphProps } from '@quick-change/core'

import { Paragraph } from '@contentful/f36-components'

/**
 * @see https://f36.contentful.com/components/paragraph
 */
export function ParagraphAdapter({ children }: ParagraphProps) {
  return (
    <Paragraph>{children}</Paragraph>
  )
}