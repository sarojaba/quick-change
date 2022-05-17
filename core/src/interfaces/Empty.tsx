import * as React from 'react'

import { useComponents } from '../providers'

export interface EmptyProps {
  children: any
}

export function Empty({ children }: EmptyProps) {
  const { EmptyAdapter } = useComponents()

  return (
    <EmptyAdapter>{children}</EmptyAdapter>
  )
}
