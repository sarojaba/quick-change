import * as React from 'react'

import { BreadcrumbItemProps } from '@quick-change/core'

import { Breadcrumb } from 'antd'

export function BreadcrumbItemAdapter({ href, active, children }: BreadcrumbItemProps) {
  const child = href
    ? <a href={href}>{children}</a>
    : children
  
  return (
    <Breadcrumb.Item>{child}</Breadcrumb.Item>
  )
}