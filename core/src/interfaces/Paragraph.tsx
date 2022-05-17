import * as React from 'react'

import { useComponents } from '../providers'

export interface ParagraphProps {
  children: any
}

export function Paragraph({ children }: ParagraphProps) {
  const { ParagraphAdapter } = useComponents()

  return (
    <ParagraphAdapter>{children}</ParagraphAdapter>
  )
}
