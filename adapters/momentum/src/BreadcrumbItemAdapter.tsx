import * as React from 'react'

import { BreadcrumbItemProps } from '@quick-change/core'

/**
 * @see https://momentum.design/components/breadcrumbs
 */
export function BreadcrumbItemAdapter({ href, active, children }: BreadcrumbItemProps) {
  return (
    <li href={href}>
      {children}
    </li>
  )
}