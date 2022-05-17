import * as React from 'react'

import { useComponents } from '../providers'

export interface StrongProps {
  children: any
}

export function Strong({ children }: StrongProps) {
  const { StrongAdapter } = useComponents()

  return (
    <StrongAdapter>{children}</StrongAdapter>
  )
}
