import * as React from 'react'

import { useComponents } from '../providers'

export interface DescriptionListTermProps {
  children: any
}

export function DescriptionListTerm({ children }: DescriptionListTermProps) {
  const { DescriptionListTermAdapter } = useComponents()
  return <DescriptionListTermAdapter>{children}</DescriptionListTermAdapter>
}
