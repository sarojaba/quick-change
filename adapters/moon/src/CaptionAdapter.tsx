import * as React from 'react'

import { CaptionProps } from '@quick-change/core'

import { Caption } from '@heathmont/moon-core'

export function CaptionAdapter({ children }: CaptionProps) {
  return (
    <Caption>{children}</Caption>
  )
}