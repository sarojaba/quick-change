import * as React from 'react'

import { BreadcrumbProps } from '@quick-change/core'

import { DuetBreadcrumbs as Breadcrumbs } from '@duetds/react'

/**
 * @see https://www.duetds.com/components/breadcrumbs/
 */
export function BreadcrumbAdapter({ children }: BreadcrumbProps) {
  return (
    <Breadcrumbs>
      {children}
    </Breadcrumbs>
  )
}