import * as React from 'react'

import { useComponents } from '../providers'

export interface CodeProps {
  children: any
}

export function Code({ children }: CodeProps) {
  const { CodeAdapter } = useComponents()

  return (
    <CodeAdapter>{children}</CodeAdapter>
  )
}
