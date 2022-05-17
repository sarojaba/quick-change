import * as React from 'react'

import { useComponents } from '../providers'

export interface MainProps {
  children: any
}

export function Main({ children }: any) {
  const { MainAdapter } = useComponents()
  return <MainAdapter>{children}</MainAdapter>
}
