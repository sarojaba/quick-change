import * as React from 'react'

import { BreadcrumbItemProps } from '@quick-change/core'

import { Breadcrumbs } from '@primer/react'

export function BreadcrumbItemAdapter({ href, active, children }: BreadcrumbItemProps) {
  return (
    <Breadcrumbs.Item
      href={href}
      selected={active}>
      {children}
    </Breadcrumbs.Item>
  )
}