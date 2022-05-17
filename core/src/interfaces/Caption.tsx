import * as React from 'react'

import { useComponents } from '../providers'

export interface CaptionProps {
  children: any
}

export function Caption({ children }: CaptionProps) {
  const { CaptionAdapter } = useComponents()

  return (
    <CaptionAdapter>{children}</CaptionAdapter>
  )
}
