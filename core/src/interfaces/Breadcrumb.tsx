import * as React from 'react'

import { useComponents, ScopeProvider } from '../providers'

export interface BreadcrumbProps {
  children: any
}

export function Breadcrumb({ children }: BreadcrumbProps) {
  const { BreadcrumbAdapter } = useComponents()

  return (
    <BreadcrumbAdapter>
      <ScopeProvider scope="breadcrumb">
        {children}
      </ScopeProvider>
    </BreadcrumbAdapter>
  )
}

/**
 * Sub components
 */
import { BreadcrumbItem } from './BreadcrumbItem'

Breadcrumb.Item = BreadcrumbItem
