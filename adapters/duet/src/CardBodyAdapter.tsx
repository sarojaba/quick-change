import * as React from 'react'

import { CardBodyProps } from '@quick-change/core'

import {
  DuetHeading as Heading,
  DuetParagraph as Paragraph
} from '@duetds/react'

/**
 * @see https://www.duetds.com/components/card/
 */
export function CardBodyAdapter({ title, thumbnail, children }: CardBodyProps) {
  return <>
    <Heading level="h3">{title}</Heading>
    <Paragraph margin="none">
      {children}
    </Paragraph>
  </>
}