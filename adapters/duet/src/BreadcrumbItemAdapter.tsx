import * as React from 'react'

import { BreadcrumbItemProps } from '@quick-change/core'

import { DuetBreadcrumb as Breadcrumb } from '@duetds/react'

/**
 * @see https://www.duetds.com/components/breadcrumbs/
 */
export function BreadcrumbItemAdapter({ href, active, children }: BreadcrumbItemProps) {
  return (
    <Breadcrumb href={href}>
      {children}
    </Breadcrumb>
  )
}