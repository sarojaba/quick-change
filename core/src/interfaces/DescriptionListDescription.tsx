import * as React from 'react'

import { useComponents } from '../providers'

export interface DescriptionListDescriptionProps {
  children: any
}

export function DescriptionListDescription({ children }: DescriptionListDescriptionProps) {
  const { DescriptionListDescriptionAdapter } = useComponents()
  return (
    <DescriptionListDescriptionAdapter>{children}</DescriptionListDescriptionAdapter>
  )
}
