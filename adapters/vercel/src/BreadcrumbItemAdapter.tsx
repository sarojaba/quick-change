import * as React from 'react'

import { BreadcrumbItemProps } from '@quick-change/core'

import { Breadcrumbs } from '@geist-ui/core'

export function BreadcrumbItemAdapter({ href, active, children }: BreadcrumbItemProps) {  
  return <Breadcrumbs.Item href={href}>{children}</Breadcrumbs.Item>
}