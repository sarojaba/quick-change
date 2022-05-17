import * as React from 'react'

import { useComponents } from '../providers'

export interface PageProps {
  children: any
}

export function Page({ children }: PageProps) {
  const { PageAdapter } = useComponents()
  return <PageAdapter>{children}</PageAdapter>
}
