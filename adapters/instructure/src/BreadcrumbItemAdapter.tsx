import * as React from 'react'

import { BreadcrumbItemProps } from '@quick-change/core'

import { Breadcrumb } from '@instructure/ui'

/**
 * @see https://instructure.design/#Breadcrumb
 */
export function BreadcrumbItemAdapter({ href, active, children }: BreadcrumbItemProps) {
  return (
    <Breadcrumb.Link href={active ? undefined : href}>
      {children}
    </Breadcrumb.Link>
  )
}