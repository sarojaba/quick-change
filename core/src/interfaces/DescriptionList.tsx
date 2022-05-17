import * as React from 'react'

import { useComponents } from '../providers'

export interface DescriptionListProps {
  children: any
}

export function DescriptionList({ children }: DescriptionListProps) {
  const { DescriptionListAdapter } = useComponents()
  return <DescriptionListAdapter>{children}</DescriptionListAdapter>
}

/**
 * Sub components
 */
import { DescriptionListTerm } from './DescriptionListTerm'
import { DescriptionListDescription } from './DescriptionListDescription'

DescriptionList.Term = DescriptionListTerm
DescriptionList.Description = DescriptionListDescription