import * as React from 'react'

import { useComponents } from '../providers'

export interface ContentProps {
  children: any
}

export function Content({ children }: ContentProps) {
  const { ContentAdapter } = useComponents()
  return <ContentAdapter>{children}</ContentAdapter>
}
