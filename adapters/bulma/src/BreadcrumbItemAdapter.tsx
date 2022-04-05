import * as React from 'react'

import { BreadcrumbItemProps } from '@quick-change/core'

import { Breadcrumb } from 'rbx'

export function BreadcrumbItemAdapter({ href, active, children }: BreadcrumbItemProps) {
  return (
    <Breadcrumb.Item active={active}>
      <a href={href}>{children}</a>
    </Breadcrumb.Item>
  )
}