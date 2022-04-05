import * as React from 'react'

import { CaptionProps } from '@quick-change/core'

import { Caption1 } from '@class101/ui'

/**
 * @see https://ui.class101.dev/core/typography#captions
 */
export function CaptionAdapter({ children }: CaptionProps) {
  return (
    <Caption1>{children}</Caption1>
  )
}