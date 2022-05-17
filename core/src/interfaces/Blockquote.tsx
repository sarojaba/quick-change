import * as React from 'react'

import { useComponents } from '../providers'

export interface BlockquoteProps {
  children: any
}

export function Blockquote({ children }: BlockquoteProps) {
  const { BlockquoteAdapter } = useComponents()

  return (
    <BlockquoteAdapter>{children}</BlockquoteAdapter>
  )
}
