import * as React from 'react'

import { useComponents } from '../providers'

export interface SampleProps {
  children: any
}

export function Sample({ children }: SampleProps) {
  const { SampleAdapter } = useComponents()

  return (
    <SampleAdapter>{children}</SampleAdapter>
  )
}
