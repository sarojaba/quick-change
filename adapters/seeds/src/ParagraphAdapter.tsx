import * as React from 'react'

import { ParagraphProps } from '@quick-change/core'

import { Text } from '@sproutsocial/racine'

/**
 * @see https://seeds.sproutsocial.com/components/text
 */
export function ParagraphAdapter({ children }: ParagraphProps) {
  return (
    <Text.BodyCopy as="p">
      {children}
    </Text.BodyCopy>
  )
}