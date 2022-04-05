import * as React from 'react'

import { BlockquoteProps } from '@quick-change/core'

export function BlockquoteAdapter({ children }: BlockquoteProps) {
  return (
    <p className="blockquote">{children}</p>
  )
}