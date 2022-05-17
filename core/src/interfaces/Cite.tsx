import * as React from 'react'

import { useComponents } from '../providers'

export interface CiteProps {
  children: any
}

export function Cite({ children }: CiteProps) {
  const { CiteAdapter } = useComponents()

  return (
    <CiteAdapter>{children}</CiteAdapter>
  )
}
